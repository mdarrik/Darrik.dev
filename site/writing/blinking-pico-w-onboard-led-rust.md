---
title: 'Blinking the onboard LED on a Pico W with Rust'
published: true
date: '2023-03-24T13:00:00-07:00'
templateEngineOverride: 'md, webc'
tags:
    - rust
    - embedded
    - RP2040
    - writing
description: 'Overview of the first steps for working with the WiFi module on a Pico W in Rust'
---

<template webc:type="11ty" 11ty:type="liquid,md">
# {{title}}
</template>

Blinking the onboard LED is a pretty common first project with any new chip. It's also a really useful indicator and debugging tool as you build out your project. With the RP2040 Pico-W's, this gets a bit trickier than with the regular RP2040 Pico's. Namely, in order to account for the GPIO pins needed to drive the WiFi chip, the onboard LED was moved from one of the pins controlled directly by the RP2040 to one of the pins controlled by the CYW43439 WiFi chip. This makes blinking the LED a bit harder, since you need to setup the WiFi co-processor in order to set the LED high or low.

## Caveats

1. While there is an [open issue on getting WiFi working in the `rp-hal`](https://github.com/rp-rs/rp-hal/issues/376), [Embassy](https://github.com/embassy-rs/embassy), via the [cyw43 crate](https://github.com/rp-rs/rp-hal/issues/376), has the best support for controlling the WiFi chip from the Pico-W. 
2. Embassy is still in active development and mostly needs to be sourced from GitHub. I'd recommend either maintaining a custom fork for your projects or pinning to a specific git commit in each project using the [`rev` property](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories) in your `Cargo.toml`. It's probably also advisable to do this with the cyw43 crate too. 


## Project Template

There's quite a bit of boilerplate required to get the cyw43 crate working. For using the most up-to-date version of the cyw43 crate, I'd recommend cloning the [`cyw43` repo](https://github.com/embassy-rs/cyw43) and copying the [`examples/rpi-pico-w ` folder](https://github.com/embassy-rs/cyw43/tree/e33b99e9ec9902d6f93582530fd9cfe38953ce69/examples/rpi-pico-w) for your project starting point. The example's `main.rs` sets up an embassy project that initializes the cyw43 chip, connects it to your WiFi network, and sets up your Pico-W as a tcp server, and echoes messages back. While we don't need all of this functionality to blink the LED, it does have all of the dependencies we need and sets up the embassy tasks and other code we need to get the cyw43 chip configured so we can control our onboard LED. If moving your project code out of the cyw43 sub-folder, you _will_ want to update the cyw43 dependency to a different source since the path `../..` will no longer be a valid path to that crate. You'll also want to copy the [firmware](https://github.com/embassy-rs/cyw43/tree/master/firmware) and [it's associated license](https://github.com/Infineon/wifi-host-driver/blob/master/WiFi_Host_Driver/resources/LICENSE-permissive-binary-license-1.0.txt) to your project folder. The easiest way to do that is to copy the firmware folder into your project. 

I've created a [repo based off of that example](https://github.com/mdarrik/pico-w-blinky-rust), trimmed down to _just_ what's needed to blink the LED. However, it might not be updated to work with any new versions of Embassy or the cyw43 crate that come out later. 


## Create an SPI Device using PIO

The Pico-W uses a 3-wire SPI interface to talk to the CYW43439 chip. However, it doesn't use one of the on-chip SPI devices so that those are available for other purposes. It also uses 3 specific pins: 

1. Pin 29 is the SPI Clock pin for the WiFi chip, note that this this is also the VSYS monitor for the RP2040, so you can't read VSYS while a WiFi SPI transaction is in place. 
2. Pin 25 serves as the chip select for the WiFi transactions
3. Pin 24 serves as both the SPI TX & SPI RX pin. It's also the interrupt pin for events from the WiFi chip. So you can't receive WiFi interrupts while executing SPI transactions to the WiFi chip.

For more info, see the [documentation for the Pico-W](https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html#raspberry-pi-pico-w-and-pico-wh). 

The result of this specific SPI setup is that the existing SPI devices available in `embassy-rp` aren't valid for interfacing with the WiFi chip. Instead, we need to create a custom SPI implementation that the cyw43 crate can use. RP2040's PIO peripheral is a great use for this (in fact it's what the [pico-sdk uses](https://github.com/raspberrypi/pico-sdk/blob/master/src/rp2_common/pico_cyw43_driver/cyw43_bus_pio_spi.pio)). Thankfully, the cyw43 Pico-W example already has a [PIO program for this purpose](https://github.com/embassy-rs/cyw43/blob/8b24fe3df02862991b2574f9d5c9ada7bd27706b/examples/rpi-pico-w/src/pio.rs) which we can copy and use. You could also create a custom SPI device that uses bit-banging or similar techniques, you'd just need to make sure your custom SPI struct implements the `SpiBusCyw43` trait so that it can be used with the cyw43 constructor in your main program. 

To use the custom PIO SPI device, import the custom SPI struct into your `main.rs` file using `use crate::pio::PioSpi;`. Then we need to acquire the peripherals and pass them to the SPI constructor:

```rust
let cs = Output::new(p.PIN_25, Level::High);
let (_, sm, _, _, _) = p.PIO0.split();
let dma = p.DMA_CH0;
let spi = PioSpi::new(sm, cs, p.PIN_24, p.PIN_29, dma);
```

1. First we acquire the chip select pin for the SPI device, which should be pin 25. It's mostly common for SPI devices to keep the chip select high while idle. 
2. We split the PIO0 peripheral and grab one of the state machines. Each peripheral has 4 state machines, so if you're using other PIO programs, you should grab additional state machines. 
3. Grab a DMA (direct memory access) peripheral, the PIO program uses the DMA for reading/writing data. 
4. Create the PioSpi struct using the `new` function. Pass in the state machine, the chip select pin, the SPI data and clock pins, and the dma peripheral. 

## Initialize the cyw43 device

Now that we have our custom SPI device, we need to get a reference to the WiFi firmware and the Country Locale Matrix (CLM) in our code. The easiest way to do this is through the `include_bytes!` macro: 

```rust
// update this path to where your firmware is relative to your `main.rs` file. 
let fw = include_bytes!("../firmware/43439A0.bin");
let clm = include_bytes!("../firmware/43439A0_clm.bin");
```

However, since the firmware is pretty big, this _can_ add a larger delay when flashing your program to your device. If this is a problem for you, you could use `probe-rs-cli` to download the two files to the device directly instead. Then you'd use the unsafe method `core::slice::from_raw_parts` to reference the files in memory. To do that, first make sure you have [probe-rs-cli](https://github.com/probe-rs/probe-rs/tree/master/cli) installed, then in your shell, navigate to the directory where you've got the two required firmware files and run: 

```sh
# installs the firmware at an address of 0x10100000 on the rp2040
probe-rs-cli download 43439A0.bin --format bin --chip RP2040 --base-address 0x10100000
# installs the CLM at an address of 0x10140000
probe-rs-cli download 43439A0_clm.bin --format bin --chip RP2040 --base-address 0x10140000
```

Then instead of the `include_bytes` lines above, do this instead: 

```rust
let fw = unsafe { core::slice::from_raw_parts(0x10100000 as *const u8, 224190) };
let clm = unsafe { core::slice::from_raw_parts(0x10140000 as *const u8, 4752) };
```

## Initializing the cyw43 struct

We're finally ready to start creating the cyw43 struct and the various components we need to be able to control our LED. First we need to initialize the power control pin:

```rust
let pwr = Output::new(p.PIN_23, Level::Low);
```

Next, we need to initialize our cyw43 state. For reasons we'll get into next, this state needs to have a static lifetime, while still being mutable. We write a custom macro that uses static_cell under the hood to achieve this. 

<template webc:raw webc:nokeep>

```rust
macro_rules! singleton {
    ($val:expr) => {{
        type T = impl Sized;
        static STATIC_CELL: StaticCell<T> = StaticCell::new();
        STATIC_CELL.init_with(move || $val)
    }};
}
```

</template>

We then call the macro in our `main.rs` file. 

```rust
let state = singleton!(cyw43::State::new());
```

We then can use the `cyw43::new` method to create the structs we need to actually control the CYW43439 chip (and thus the onboard LED). 

```rust
let (_, mut control, runner) = cyw43::new(state, pwr, spi, fw).await;
```

Since we're not doing any WiFi stuff, we can fully ignore the first value in the returned tuple. The `control` struct is the one we'll eventually use to control our LED, and it can also be used for managing other aspects of the CYW43439 chip. The `runner` struct's `run` method handles all of the background communication with the chip and is necessary for the final initialization pieces of the `control` struct. Note that the `run` method never terminates, so it needs to be handled in a separate task from the rest of your program. To do that, we create an `embassy_executor::task` function and pass the runner to that task.

<callout> This separate task is actually why we had to use that singleton macro to give the cyw43 state value a static lifetime. Any args passed to tasks in embassy need to have a static lifetime. Giving the state a static lifetime upgrades the lifetime of the runner to static. </callout>

<template webc:raw webc:nokeep>

```rust
#[embassy_executor::task]
async fn wifi_task(
    runner: cyw43::Runner<
        'static,
        Output<'static, PIN_23>,
        PioSpi<PIN_25, PioStateMachineInstance<Pio0, Sm0>, DMA_CH0>,
    >,
) -> ! {
    runner.run().await
}
```

</template>

```rust
// inside the main fn
// unwrap is a defmt macro for unwrapping results. Could easily call spawner.spawn(wifi_task(runner)).unwrap() here too
unwrap!(spawner.spawn(wifi_task(runner)));
```

Now that the wifi task is running, we can run the init function on the control struct so that it's fully ready to start controlling the chip. I

```rust
// note that if your task calling runner.run().await hasn't been started yet, this init future will never complete and your program will hang. 
control.init(clm).await;
```

At this point, we're finally ready to blink the onboard LED. We can use the `control.set_gpio` function to control the LED, and use `embassy-time`'s Timer functions to add a delay between turning it on + off so the LED blinks.  

```rust
// to keep this repeating, do this inside the main loop
Timer::after(Duration::from_secs(1)).await;
control.gpio_set(0, true).await;
Timer::after(Duration::from_secs(1)).await;
control.gpio_set(0, false).await;
```

With that, we should be good to blink our LED on our Pico-W by flashing our program (If you've setup your `rust-toolchain.toml` + `.cargo/config.toml` that can be done with `cargo run`!).

<figure class="video-figure mb-6">
<video
	width="480"
    aria-label="Video of a RP2040 Pico-W on a breadboard with a blinking LED. The onboard LED starts on, then blinks off for 1 second, then on again for 1 second. This repeats until the end of the video"
    preload="metadata"
    poster="https://res.cloudinary.com/darrik-dev/video/upload/fl_force_strip,q_auto/v16797877572/pico-w-blinky-blogpost-video_h4yciw.webp"
  controls>
  <source
    src="https://res.cloudinary.com/darrik-dev/video/upload/f_auto,fl_force_strip,q_auto/v1679787757/pico-w-blinky-blogpost-video_h4yciw.webm" type="video/webm"/>
    <source
    src="https://res.cloudinary.com/darrik-dev/video/upload/f_auto,fl_force_strip,q_auto/v1679787757/pico-w-blinky-blogpost-video_h4yciw.mp4" type="video/mp4"/>
    <source
    src="https://asset.cloudinary.com/darrik-dev/28d814e27bfe377c2adb676b68300661"
    type="video/mp4" /> Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href="https://asset.cloudinary.com/darrik-dev/28d814e27bfe377c2adb676b68300661">
    download the MP4
  </a>
  and watch it with your favorite video player!
</video> 
<figcaption>Here's the final code running on a Pico-W.</figcaption>
</figure>
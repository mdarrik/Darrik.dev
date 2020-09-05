---
tags: ["writing", "observability", "o11y"]
title: Configuring Libhoney for Rust
date: "2020-09-04T22:30:00.000Z"
description: How to setup the libhoney-rust crate in your applications so you can add observability to your Rust programs and applications. 
---

# {{title}}

Honeycomb currently doesn't maintain an official package for sending info to Honeycomb from inside a Rust program. However, there is at least one community-maintained one: [libhoney-rust](https://docs.rs/crate/libhoney-rust). This package, provides functionality for building and sending events to Honeycomb.   

## Installing libhoney-rust

To install libhoney-rust you first need to add the crate to your cargo.toml. To do that add `libhoney-rust = {version}` underneath your `[dependencies]` section. So at the time of writing, the current version is `0.1.3`. So that would look something like this: 

```toml
[dependencies]
libhoney-rust = ^0.1.3
```
You can then import the libhoney crate in your code using `use::libhoney`. 
You can then use the provided members of this package to create a libhoney client. Because the client needs to be in scope for the lifetime of your app, you'll probably want to generate it near the top of your `main` function. 

## Creating a libhoney config 
The first part of using libhoney-rust is to create a "libhoney config" struct. The struct has two fields: `options` and `transmission_options`. Both fields implement the `default` trait, which we can use to our advantage. 

```rust
let honeycomb_config = libhoney::Config {
    options: libhoney::client::Options {
        api_key: env::var("HONEYCOMB_API_KEY").expect("expected a honeycomb api key")
        dataset: env::var("HONEYCOMB_DATASET_NAME").expect("expected a honeycomb dataset name"),
        ...libhoney::client::Options::default()
    },
    transmission_options: libhoney::transmission::Options::default()
}
```

To the options field we need to pass our api key and dataset name. I've used environment variables for both, but you don't have to. While a hard-coded string is fine for the dataset name, you'll want to keep your API key a secret. Currently, this app panics if the environment variables aren't set. You may want to handle this differently in your application.

After passing the api key and dataset name, we can use Rust's update syntax to apply the remaining options via `...libhoney::client::Options::default()`. If you want to customize any of the other options, you can [check the documentation for Client Options](https://docs.rs/libhoney-rust/0.1.3/libhoney/client/struct.Options.html). Similarly, we'll use the default transmission_options.You can check the [Transmission Options documentation](https://docs.rs/libhoney-rust/0.1.3/libhoney/transmission/struct.Options.html) if you need to customize them.

## Creating a client

Once we have a config, we can create a client using the `libhoney::init` function. 

```rust
let client = libhoney::init(honeycomb_config);
```

Note that the client creates background threads to send events. You can terminate these threads using the `client.close()` command.

Now that we have a client, you can create events using `client.new_event()`. You can then add data to your events and send them to Honeycomb using the `event.add()` and `event.send()` methods respectively.
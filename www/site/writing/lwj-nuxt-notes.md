---
tags: [notes, Nuxt]
title: Notes on LWJ Show's "Let's Learn Nuxt (with Maya Shavin)"


---
# {{title}}

These are my notes on Nuxt from the [Learn with Jason's "Let's Learn Nuxt (with Maya Shavin)" episode](https://www.learnwithjason.dev/let-s-learn-nuxt). 

## nuxt-create
The `nuxt-create` command can only run once. Unlike the Vue CLI there's no way to add plugins from the nuxt-create CLI. 

## Cloudinary Module
There's an installable Cloudinary module to handle importing images from Cloudinary. Cloudinary is a cloud-based media handling platform. It uses queries to handle transforming and modifying images. 

The Cloudinary module lets you pass in a public path and get Cloudinary hosted images via `this.$cloudinary.url(\*relative folder path url goes here*/ /myFolder/myImage)`

By default, the Cloudinary module adds some default transformations: 

- fauto - optimize image for downloading browser, including file type. 
- qauto - optimizes image quality for the downloading browser to not download unnecessary large images.

Cloudinary has the ability to fetch remote images and transform them with Cloudinary. In Nuxt, it runs like this: 

```js
$cloudinary.image('url-to-remote-image')
```

Crop images to a face and convert to thumbnail: 

```
/r_max,c_thumb,g_face,w_px,h_px
```
To handle this in the Cloudinary package, you pass in an object of transformations to the image function: 

```js
$cloudinary.image('url', {
    //transforms go here
    gravity: 'face', 
    width: '200px',

})
```

Other note: Cloudinary has a GraphQL API in the works!


## Nuxt Develop
The `Nuxt` command (development mode) does server side generation mixed with hot reloading. This is more akin to the `nuxt build` && `nuxt start` commands.

## Static Site
You can deploy the site using `nuxt generate`

The generate command has support for "incremental compilation". This reduces subsequent builds when the content has changed but the code has not. It uses a `generate cache` to compare changes between builds. Need to make sure this cache is accessible on subsequent builds. 

## Fetching dynamic content on the server
Notes on how to fetch content on the server. 

### AsyncData
The async data method runs before the component is generated. 

Attaches as a function to the page default export object. Note that because it runs before the component is mounted, it doesn't have access to most of `this` or any of the component properties. 

You can access existing modules with the `context` property. 

Nuxt will merge the properties from the AsyncData function with the data property. 

Q: Does it merge data properties or just overwrite when the component mounts? e.g. if both return an image array with values, what will happen. Gut says merge, but will need to check. Especially since it's unclear what happens if it's just a value. 

## Other Notes
- There is a {Nuxt image module in the works](https://image.nuxtjs.org/). It's still in early preview, but includes support for lazy loading and optimizing images. It lets you tap into various providers so you can swap image transformations on the fly. 
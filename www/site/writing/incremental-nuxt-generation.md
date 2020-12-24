---
tags: [writing, Nuxt, Vue, jamstack]
title: Incrementally Generating Pages with Nuxt
description: Generate just a few pages to greatly speed up content changes on your Static Nuxt site. 
---

# {{title}}

Nuxt's generate feature makes it a great option for creating static sites with Vue. Like many static site generators, build times grow as the site does. To help with this, Nuxt provides a cache feature you can use to prevent Webpack rebuilds when only content changes. This can shave a couple minutes off of content-only builds. We can take advantage of this & the generate config's route property to generate just the pages that have changed. This can bring long build times to a handful of seconds. I initially figured this out while doing work on a site with build times > 20 minutes. 

## See a working example

To see a working example of this for a site built on Netlify, you can checkout [the demo incremental build Nuxt site I created](https://github.com/mdarrik/nuxt-test-incremental-generation). It generates a page for every single Nasa Image of the Day. It's set up so I can deploy a single page via a Netlify webhook. 

## Pre-requisite setup
- A working Nuxt site, configured for "static" mode. The [create-nuxt-app CLI](https://nuxtjs.org/docs/2.x/get-started/installation#using-create-nuxt-app) can help you set this up.
- Dynamic pages (more on this later)
- A CI/CD pipeline<sup class="font-bold">*</sup> that can cache files between builds, can be triggered via a webhook, and let you run custom commands before/after builds (like Netlify, or GitHub Actions).

<sup class="font-bold">*</sup> The CI/CD pipeline is mainly for doing for deploying sites that can build incrementally. If you just want to test it out/play around, this piece is less important.


## Setting up route generation

The first part of this is to use the [routes option inside the generate property](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate#routes) of the Nuxt config. Specifically, we want to use one of the function-based options (either the callback or the promise variation will work, but I'll be using the promise-based one in this article). You'll also want to turn off the `crawler`. This way Nuxt doesn't start crawling your pages to generate even more. The tradeoff is you need to make sure you're able to get every dynamic page in your routes function. Nuxt will always generate your fixed paths, even with the crawler turned off, which is why your site needs to be mostly dynamic pages for this to work. 

You'll want to create a separate file for generating the routes that exports a function. That way we can use an environment variable or other flag to differentiate between a partial build and a full build. You'll still want to be able to do full builds when code or site-wide data changes. Note that if you put the function directly in your Nuxt config, Nuxt will require a full rebuild when your environment variable changes which means that your first partial build will require a full Webpack rebuild. This will make your builds slower and potentially cause deployment issues. For similar reasons, you'll want to make sure that the partial build env variable isn't included in your env file or your runtime configs.

Also note that your routes function will not be fully parsed by Webpack/Babel, so you'll only get access to JS imports/exports and language features native to your current version of Node. 

The specifics of your function will be fairly unique to your site, but a structure like this will probably work for most use cases: 

```js
export default async function() {
    // this env variable can be anything. 
    // But you want it to be a flag you can turn on & off to detect full builds vs incremental
    if(process.env.IS_INCREMENTAL_GENERATE) { 
        // fetch just the page(s) that changed
        return incrementalRoutes // array of just your changed pages
    }
    // fetch all pages - this is needed for code changes or global content changes
    return routes // array with every single dynamic page in your site.
}
```

If your CI/CD pipeline supports passing data with the build webhook, you can use that data in your environment variable (or it'll be set as one already in the case of Netlify). Make sure to parse that data so you can use it. 


For a concrete example of a routes function, you can see the [`get-routes.js` file from the demo site I created](https://github.com/mdarrik/nuxt-test-incremental-generation/blob/main/get-routes.js). It's designed for Netlify, so I'm using the presence/absence of a Webhook body to figure out when to do a full build vs an incremental build. 

## Merging your incremental generation with your existing files
So once you've configured your site for incremental generation, you need to go through the process of merging your partial/incremental builds with your full site builds. How you do this in practice will depend a lot on your personal deployment setup. But the gist is that you want to get a folder with your existing build, and merge the output of your Nuxt build into that folder and deploy it. Since you want to copy your new files into your existing files, you'll want to _not_ deploy your `dist` folder directly. This is because Nuxt will delete your `dist` folder before each build, so you'll end up losing any cache you restore to `dist`. Instead, I'd create a new folder as part of your deploy process that you can restore/deploy from. So in my example repo, I create a www folder which gets cached between builds & I copy to/deploy that every time. Since I deploy to Netlify, I use a build plugin to handle caching, restoring, and copying to the folder. But for other CI/CD pipelines, it'll look similar. The gist of it is this: 
1. Restore any cached `www` & `.nuxt` folders (the `.nuxt` folder is necessary to not trigger a rebuild). 
2. Build your site
3. Copy your `dist` folder into your `www` folder. (For Netlify, build plugins have hooks that trigger after build. The plugins are written in JS & run on an Ubuntu instance, so you can use `exec('cp dist www')` (or `` `cp dist ${process.env.PUBLISH_DIR}` ``). For other pipelines, you'll want to do something similar.
4. Deploy your `www` folder.

Once that's configured your site is all configured for incremental builds. So after a full build you'll be able to test it out. If working locally, you can run your build command then set your environment variable for incremental builds and run it again. In bash, that might look like this (assuming your incremental build variable is `INCREMENTAL_BUILD` & is a boolean): 
```bash
npm run build
cp dist www
INCREMENTAL_BUILD=true npm run build
```
If you don't get a full Webpack rebuild the second time, and only the pages you intended to built were listed, then you're all set. Your site is now configured for incremental builds with Nuxt!
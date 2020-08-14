---
tags: ["writing", "accessibility"]
title: Programmatically Setting Focus
excludeFromCollections: true
---

# Programmatically setting focus

While users can move focus for themselves, sometimes you may need to move focus for users (but only after user action of course!). Examples of this include modals, delete actions, [client-side routing](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/). Enhancing browser features, like I suggest in [[intro-to-skip-links]]/[[progressive-skip-links]] is another common use case. 

## Natively interactive elements
For elements that are natively interactive (buttons, links, inputs, etc.), you need to select the element in JS (using something like `document.querySelectorAll`), and then call `element.focus()`, where "`element`" is the element you're focusing.


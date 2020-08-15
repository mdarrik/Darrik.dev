---
tags: ["writing", "accessibility"]
title: Programmatically Setting Focus
excludeFromCollections: true
---

# Programmatically setting focus

While users can move focus for themselves, sometimes you may need to move focus for users (but only after user action of course!). Examples of this include modals, delete actions, [client-side routing](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/). Enhancing browser features, like I suggest in [[intro-to-skip-links]]/[[progressive-skip-links]] is another common use case. 

In order to set focus, you need to select the element using a method like `const element = document.getElementById("my-element")`. Then, you call `element.focus()`. However, this doesn't work for every element out of the box. By default, this will only work for interactive elements (inputs, buttons, links, etc). 



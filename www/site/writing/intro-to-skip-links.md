---
title: Introduction To Skip Links
excludeFromCollections: true
tags: ["writing", "accessibility", "skip links"]
order: 0
description: "Find out about skip links and why they're important. Also look into implementing your first one."
date: "2020-04-10T07:26:47.000Z"
---

# Introduction To Skip Links

When users use keyboard or switch devices, navigating past repeated content can be tedious or even cause strain. This is especially true if the repeated content has large amounts of interactive elements. It's therefore important to help improve the experience for these users by providing a way to bypass repeated content. This is even outlined as a WCAG criteria, [WCAG Criteria 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html). In fact, this is a _Level A_ criterion, which means leaving it out has a severe impact on users.

Nearly every site has repeated content: the navigation menu. In classical routing, when users navigate to a page, focus is set to the very top of the page. This means that screen reader, switch, and keyboard users all have to navigate past every link in the nav bar before reaching the main content on a page. While for small sites, with just a few links, this doesn't seem too bad, but think about all of the large sites where the nav menu has 20+ links, or a second nav menu immediately after the main nav. Not being able to easily bypass the menu ends up creating a lot of work for non-mouse users, and may even make using your site too frustrating. It's therefore important to provide an intuitive way to skip directly to the main content.

## Other Places You Might Want Skip Links

While skip links are most common in navigation menus, they aren't the only "repeated content" that you might have on your site. The best way to find places to use them is to test with actual users. However, here are some other places you might need them.

- ### Data Grids & Tables with Links

  Data Grids often feature numerous interactive elements. This creates a lot of tab-stops for keyboard users. It's therefore useful to give users a way to skip over these elements to get to anything that might be underneath them.

- ### Menus for complex interactive elements, like rich text editors

  If you have an element with a lot of menu options for formatting and other things, you may want users to be able to skip past those menus to get directly to the text area. This is especially true if this text editor is a common part of the user workflow. You'll also probably want some form of keyboard shortcut so users can jump back and forth between the menu and the editor. Note that aria

## An Initial Implementation

Because you're moving focus, or "navigating" users somewhere else on the page, you can use the trusty `<a>` tag. In fact, you should. In terms of skip links for nav bars, the conventional link text is usually "Skip to main content". This is typically better than "skip navigation" because it lets users know where you're navigating them to instead of just that you're navigating them. The link target should then be the `<main>` tag on your page, since this is where your main content lives.

Tying that all together, your skip link implementation should look something like this:

```html
<body>
  <a href="#main">Skip to main content</a>
  <nav><!--My nav markup goes here --></nav>
  <main id="main"></main>
</body>
```

You can also use this CodePen to test out the implementation.

<p class="codepen flex items-center justify-center border-2 border-red-600 mx-1 p-1" data-height="355" data-theme-id="light" data-default-tab="html,result" data-user="mdarrik" data-slug-hash="abOBoYR" data-preview="true" style="height: 355px;" data-pen-title="Bare Bones Skip Link">
  <span>See the Pen <a href="https://codepen.io/mdarrik/pen/abOBoYR">
  Bare Bones Skip Link</a> by Darrik Moberg (<a href="https://codepen.io/mdarrik">@mdarrik</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In most browsers, this is sufficient. If you test out the CodePen, you can try tabbing to the skip link, activating it with <kbd>enter</kbd>, and then pushing <kbd>tab</kbd>. What should happen, is that focus moves to the link after the text reading "My Main Content". In an ideal world, we could stop here. Focus gets moved on link activation and everything is fine.

### Some Users Still Left Out

The way that links move focus is part of how browsers implemented "sequential-focus-navigation-starting-point". [Sarah Higley has a great article on this topic](https://sarahmhigley.com/writing/focus-navigation-start-point/). What's important is that most browsers only began implementing this feature in the 2010's, with Chrome (desktop) only adding it in 2016. According to [this 2018 article from Axess Labs](https://axesslab.com/skip-links/), there were focus bugs with the above skip link pattern at least into 2018. While I can confirm that the bug has been resolved in more recent versions of iOS (iPhone X, 2019), it's important to consider that the above implementation won't work for users using older phones and browsers. In the name of progressive enhancement, we can provide a solution that works for everyone. To do that, check out my post [Progressively Enhanced Skip Link](/progressive-skip-link/)

There, I walk through how to create a skip link that works in nearly every browser, using nothing more than Vanilla JavaScript.

## Hiding Skip Links

So now that we've gone through all of that effort to create skip links, you might be thinking that you don't want this random link sitting on top of your page (or before any of your other repeated content). So how can we hide it? We can use the :focus psuedo-class and a special visually-hidden class. This class is designed to hide content visually, while still keeping them in the document's tab order/accessibility tree. If you just hide the content with `display:none`, or `visibility:hidden`, assistive technology won't know that the links are there until they're focused on. This means users might not know they exist at all until they tab to them, which can be a problem. You can find out more about hiding content via this A11y Project Article, [How-to: Hide Content](https://a11yproject.com/posts/how-to-hide-content/). Also check out Scott O'Hara's article, [Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html), as it covers all the ways to hide content for screen reader users.

I do a slight variation on the one presented there because they use the CSS `clip` property which is being deprecated for the `clip-path` property. My version looks like this:

```css
.visually-hidden:not(:focus):not(:active) {
  /* https://a11yproject.com/posts/how-to-hide-content/ */
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  /*clip with spaces for older browsers*/
  clip: rect(1px 1px 1px 1px);
  /*clip with commas for most browsers*/
  clip: rect(1px, 1px, 1px, 1px);
  /*clip-path for newer browsers*/
  clip-path: rect(1px, 1px, 1px, 1px);
}

.visually-hidden:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: auto;
}
```

If you add that class to your skip link, it'll only appear when focused. You can test it out on the below CodePen.

<p class="codepen flex items-center justify-center border-2 border-red-600 mx-1 p-1" data-height="331" data-theme-id="light" data-default-tab="css,result" data-user="mdarrik" data-slug-hash="NWqvrKm" data-preview="true" style="height: 331px;" data-pen-title="Visually Hidden Skip Link">
  <span>See the Pen <a href="https://codepen.io/mdarrik/pen/NWqvrKm">
  Visually Hidden Skip Link</a> by Darrik Moberg (<a href="https://codepen.io/mdarrik">@mdarrik</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Styling

If you really want to give your skip links some pizzazz, you can add some styles. This can be a pleasant surprise to visual keyboard/switch users who are used to bland skip links that just have the default list styles. This styling is going to depend a lot on what your site styles are like. For an example on styled skip links, check out this section of the [Inclusively Hidden Content](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html#visually-hidden-off-screen) article I mentioned earlier. The skip links there are styled off screen instead of visually hidden so that they can transition into view with an animation. Just make sure to respect users' animation preferences using the "prefers-reduced-motion" media query ([See this blog by Lindsey Kopacz for more info on prefers-reduced-motion](https://www.a11ywithlindsey.com/blog/reducing-motion-improve-accessibility)).

In addition to styling the link, we can improve our skip links by styling the link target. This way, we can help users understand where their focus should be now. E.J. Mason has a great [CodePen demoing this for internal document links](https://codepen.io/dengeist/pen/vYOEXgg). I'm also working on an article to walkthrough doing this. You can keep an eye on my progress here: [Styling Skip Link Targets](https://www.notion.so/mdarrik/Styling-Skip-Link-Focus-2bc78d7b17d2474dbbe9d01160a6b74b).

{% assign skipLinkPosts = collections['skip links']%}

{%blog-series skipLinkPosts, "More on Skip Links", page.fileSlug, "green"%}

require('dotenv').config();

function getAccentBorderColor(color='') {
  const accentBorderColors = ['border-red-600', 'border-blue-600', 'border-green-600', 'border-teal-600'];
  // shortcircuit if color is empty string.
  const matchedColor = color.trim() === '' ? null : accentBorderColors.find(borderColorName => borderColorName.includes(color.toLowerCase()));
  return matchedColor || accentBorderColors[Math.floor(4*Math.random())];
} 

module.exports = function(eleventyConfig) {
    //passThrough
    eleventyConfig.addPassthroughCopy("site/images")
    eleventyConfig.addPassthroughCopy({"site/_includes/prism-a11y-dark.css" : "prism-a11y-dark.css"})
    eleventyConfig.addPassthroughCopy({"../_redirects": "_redirects"})
    //Plugins
    syntaxHighlighting = require('@11ty/eleventy-plugin-syntaxhighlight')
    eleventyConfig.addPlugin(syntaxHighlighting)

    //shortCodes
    eleventyConfig.addPairedShortcode('h1', (content, className="") => {
        return `<h1 class="font-semibold md:text-3xl text-2xl font-decorative ${className}">${content}</h1>`
    })
    eleventyConfig.addPairedShortcode('h2', (content, className="") => {
        return `<h2 class="mb-3 text-xl font-semibold font-decorative ${className}">${content}</h2>`
    })
    eleventyConfig.addPairedShortcode("projectCard", (content,
        el = 'div', className = "", color) => {
            return `<${el} class="shadow-lg px-4 pb-2 ${className.trim()} ${getAccentBorderColor(color)}">${content}</${el}>`
    })
    eleventyConfig.addShortcode("blog-series", (collection, title, pageUrl, borderColor) => {
      const sortedCollection = collection.sort((firstEl, secondEl ) => firstEl.data.order - secondEl.data.order)
      const listElements = sortedCollection.map((post) => {
        if(post.fileSlug == pageUrl) {
          return `<li><a href="#current-series-link" class="font-bold" aria-current="true">${post.data.title} - You are Here</a></li>`
        }
        return `<li><a href="${post.fileSlug}" aria-current="false">${post.data.title}</a></li>`
      })
      return `<aside class="shadow-lg px-4 pb-2 border-4 mt-4 mb-2 ${getAccentBorderColor(borderColor)}"><h2>${title}</h2><ul>${listElements.join(' ')}</ul></aside>`
    })

    //filters
    eleventyConfig.addFilter("conditionalContains", (content, fullString, subString) => {
      return fullString.includes(subString) ? content : ''
    })
    eleventyConfig.addFilter("log", (content) => { console.log(content)})
    eleventyConfig.addFilter("accent-border-color", getAccentBorderColor)
  return {
    dir: {
      input: "./site/"
    }
  };
};

require("dotenv").config();
const syntaxHighlighting = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebc = require("@11ty/eleventy-plugin-webc");

function getAccentBorderColor(color = "") {
  const accentBorderColors = [
    "border-red-600",
    "border-blue-600",
    "border-green-600",
    "border-teal-600",
  ];
  // shortcircuit if color is empty string.
  const matchedColor =
    color.trim() === ""
      ? null
      : accentBorderColors.find((borderColorName) =>
          borderColorName.includes(color.toLowerCase())
        );
  return matchedColor || accentBorderColors[Math.floor(4 * Math.random())];
}
/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
module.exports = function (eleventyConfig) {
  //passThrough
  eleventyConfig.addPassthroughCopy("site/images");
  eleventyConfig.addPassthroughCopy("site/robots.txt");
  eleventyConfig.addPassthroughCopy({
    "site/_includes/prism-a11y-dark.css": "prism-a11y-dark.css",
  });
  eleventyConfig.addPassthroughCopy({ "./_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({
    "site/_includes/assets/subfont": "/subfont",
  });
  //Plugins
  eleventyConfig.addPlugin(syntaxHighlighting);
  eleventyConfig.addPlugin(pluginWebc, {
    components: "site/_includes/components/**/*.webc",
  });

  //shortCodes
  eleventyConfig.addPairedShortcode("h1", (content, className = "") => {
    return `<h1 class="font-semibold md:text-3xl text-2xl ${className}">${content}</h1>`;
  });
  eleventyConfig.addPairedShortcode("h2", (content, className = "") => {
    return `<h2 class="text-xl md:text-2xl font-semibold ${className}">${content}</h2>`;
  });
  eleventyConfig.addShortcode(
    "blog-series",
    (collection, title, pageUrl, borderColor) => {
      const sortedCollection = collection.sort(
        (firstEl, secondEl) => firstEl.data.order - secondEl.data.order
      );
      const listElements = sortedCollection.map((post) => {
        if (post.fileSlug == pageUrl) {
          return `<li><a href="#current-series-link" class="font-bold" aria-current="true">${post.data.title} - You are Here</a></li>`;
        }
        return `<li><a href="${post.url}" aria-current="false">${post.data.title}</a></li>`;
      });
      return `<aside class="shadow-lg px-4 pb-2 border-4 mt-4 mb-2 ${getAccentBorderColor(
        borderColor
      )}"><h2>${title}</h2><ul>${listElements.join(" ")}</ul></aside>`;
    }
  );

  //filters
  eleventyConfig.addFilter(
    "conditionalContains",
    (content, fullString, subString) => {
      return fullString.includes(subString) ? content : "";
    }
  );
  eleventyConfig.addFilter("log", (content) => {
    console.log(content);
  });
  eleventyConfig.addFilter("accent-border-color", getAccentBorderColor);
  eleventyConfig.addFilter("keys", function (val) {
    return Object.keys(val);
  });
  eleventyConfig.addFilter("excludeValue", function (arr, ValueToExclude) {
    return arr.filter((item) => item != ValueToExclude);
  });
  eleventyConfig.addFilter("sortAlphabetical", function (arr) {
    return arr.sort();
  });
  return {
    dir: {
      input: "./site/",
    },
  };
};

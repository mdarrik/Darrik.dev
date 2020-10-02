const fs = require('fs').promises;
const path = require('path');
const postCss = require('postcss');
const purgeCssFunction = require('@fullhuman/postcss-purgecss')
const postCssNesting =  require('postcss-nesting')
const postCssImport = require('postcss-import')
const postCssEach = require('postcss-each')
const postCssExtend = require('postcss-extend')
const postCssAtRules = require('postcss-at-rules-variables')
const autoprefixer = require('autoprefixer')
const cssNano = require('cssnano')
const postCssLogical = require('postcss-logical')

const purgeCSS = purgeCssFunction({
    content: [
        'site/**/*.html',
        'site/**/*.liquid',
        'site/**/*.njk',
        'site/**/*.md',
        'site/**/*.js',
        '.eleventy.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = async function(cssFile) {
    const cssFilePath = path.join('./site/', cssFile);
    const rawCss = await fs.readFile(cssFilePath);
    return await postCss([ postCssImport({plugins: [postCssAtRules]}), postCssAtRules({preserve: false}), postCssEach(), postCssExtend(), postCssNesting(), postCssLogical({
        dir: 'ltr',
        preserve: true
    }),
        ...process.env.NODE_ENV === 'production'
            ? [purgeCSS, cssNano({preset: 'default'})]
            : [],
      ]  ).process(rawCss, {from: cssFilePath})
}
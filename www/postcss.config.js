const purgeCssFunction = require('@fullhuman/postcss-purgecss')
const postCssNesting =  require('postcss-nesting')
const tailwindCss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssNano = require('cssnano')

const purgeCSS = purgeCssFunction({
    content: [
        'site/**/*.html',
        'site/**/*.liquid',
        'site/**/*.njk',
        'site/**/*.md',
        'site/**/*.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = () => ({
  plugins: [tailwindCss('./tailwind.config.js'), postCssNesting(),
  ...process.env.NODE_ENV === 'production'
      ? [purgeCSS, cssNano({preset: 'default'})]
      : [],
]
});

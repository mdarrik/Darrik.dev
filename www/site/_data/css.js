let postCSSFilter = require('../../utils/postCss-filter')


module.exports = async function() {
    return await postCSSFilter('_includes/global.css', (input) => input)
}
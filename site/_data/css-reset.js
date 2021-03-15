let postCss = require("postcss");
let postCssImport = require("postcss-import");

module.exports = async function () {
  return await postCss([postCssImport]).process(
    '@import "modern-css-reset/dist/reset.css";'
  );
};

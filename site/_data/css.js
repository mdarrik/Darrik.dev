import postCSSFilter from "../../utils/postCss-filter.cjs";

export default async function () {
  return await postCSSFilter("_includes/global.css", (input) => input);
}
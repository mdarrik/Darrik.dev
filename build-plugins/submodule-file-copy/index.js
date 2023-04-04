import { readdir, copyFile, rm, link, appendFile } from "node:fs/promises";

let article_names = [];

export const onPreBuild = async function ({ utils, constants }) {
  if (await readdir("private-articles").catch((e) => {})) {
    try {
      const articles = await readdir("private-articles/pages/published/");
      const run = utils.run;
      article_names = articles;
      await appendFile(".git/info/exclude", "\n");
      for (const article of articles) {
        const destinationFile = `site/writing/${article}.md`;

        try {
          await link(
            `private-articles/pages/published/${article}/blog.md`,
            destinationFile
          );
          await appendFile(".git/info/exclude", `${destinationFile}\n`);
        } catch {}
      }
      utils.status.show({
        title: "Private Articles sym linked",
        summary: `${articles.length} - articles written to ./site/writing`,
        text: `File names: 
          ${articles.map((article) => `${article}.md`).join("\n")}
          `,
      });
    } catch {}
  }
};

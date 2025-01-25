export default {
  owner: "Darrik Moberg",
  siteTitle: "Darrik Moberg",
  description:
    "Darrik is a full stack developer with an interest in developing user-focused, accessible products.",
  author: "Darrik Moberg",
  keywords: ["Web Development", "HTMl", "CSS", "JavaScript"],
  socialMedia: [
    {
      name: "Mastodon",
      url: "https://notacult.social/@mdarrik",
      icon: "mastodon.svg#mastodon",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/mdarrik.bsky.social",
      icon: "bluesky.svg#bluesky",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/mdarrik",
      icon: "github.svg#github",
    },
    //  {"name": "Patreon", "url": "https://www.patreon.com/mdarrik", "icon": "patreon.svg#patreon"},
  ],
  year: new Date().getFullYear(),
  // if from pull request, set prime_url, otherwise set site base url. fallback to localhost
  url:
    (process.env.PULL_REQUEST === "true"
      ? process.env.DEPLOY_PRIME_URL
      : process.env.URL) || "http://localhost:8080",
};

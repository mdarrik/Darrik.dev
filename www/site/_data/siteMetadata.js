module.exports = {
    "owner": "Darrik Moberg",
    "siteTitle": "Darrik Moberg",
    "description": "Darrik is a full stack developer with an interest in developing user-focused, accessible products.",
    "author": "Darrik Moberg",
    "keywords": ["Web Development", "HTMl", "CSS", "JavaScript"],
    "socialMedia": [
        {"name": "Twitter", "url": "https://www.twitter.com/mdarrik", "icon": "twitter.svg"},
        {"name": "GitHub", "url": "https://www.github.com/mdarrik", "icon": "github.svg"},
        {"name": "Patreon", "url": "https://www.patreon.com/mdarrik", "icon": "patreon.svg"},
        {"name": "Dev.To", "url": "https://www.dev.to/mdarrik", "icon": "dev-dot-to.svg"}
    ],
    "year": new Date().getFullYear(),
    // if from pull request, set prime_url, otherwise set site base url. fallback to localhost
    "url": (process.env.PULL_REQUEST ? process.env.DEPLOY_PRIME_URL : process.env.URL) || 'http://localhost:8080'
    "isPR": process.env.PULL_REQUEST
}
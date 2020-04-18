const playwright = process.env.NODE_ENV === 'production' ? require('playwright-aws-lambda') : require('playwright')
const fs = require('fs');
const script = fs.readFileSync

exports.handler = async function({queryStringParameters}, fnContext) {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    page.setViewportSize({
        width: 1200,
        height: 630
    })
    await page.setContent(
        `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
            </head>
            <body>
                <div id='container'></div>
            </body>
        </html>
    `);
    const tags = queryStringParameters.tags ? decodeURIComponent(queryStringParameters.tags).split(",") : [];
    await page.addScriptTag({
        content: `
            window.title = "${queryStringParameters.title || "No Title"}"
            window.tags = ${JSON.stringify(tags)};
            window.author = "${queryStringParameters.author || ''}";
        `
    })
    await page.addScriptTag({
        path: './www/functions/opengraph-image-generator/src/index.js',
        type: 'module'
    })
    const boundingRect = await page.evaluate(() => {
        const container = document.getElementById('container')
        const {x, y, width, height } = container.getBoundingClientRect();
        return {x, y, width, height};
    });

    const screenshotBuffer = await page.screenshot({ clip: boundingRect})
    await browser.close();
    return {
        isBase64Encoded: true,
        statusCode: 200,
        headers: {
            "Content-Type": "image/png",
            "Content-Length": screenshotBuffer.length.toString()
        },
        body: screenshotBuffer.toString("base64")
    }
}
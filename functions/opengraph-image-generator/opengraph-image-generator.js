const playwright = require("playwright-aws-lambda");
require("playwright-core");
const fs = require("fs");
const path = require("path");
const script = fs.readFileSync(path.join(__dirname, "./image.js"), "utf-8");
const libHoney = require("libhoney");
const honeycomb = new libHoney({
  writeKey: process.env.HONEYCOMB_API_KEY,
  dataset: process.env.HONEYCOMB_DATA_SET,
});

exports.handler = async function (
  { UserId, UserAction, queryStringParameters },
  fnContext
) {
  //Honeycomb Init
  const honeycombEvent = honeycomb.newEvent();
  //add some function-level info.
  honeycombEvent.add({
    functionName: fnContext.functionName,
    functionVersion: fnContext.functionVersion,
    requestId: fnContext.awsRequestId,
    userId: UserId,
    userAction: UserAction,
    queryStringParameters: JSON.stringify(queryStringParameters),
  });
  // initialize the browser variable and the return value
  let browser;
  let returnValue = {
    statusCode: 501,
    body: "There was an error generating the open graph image",
  };
  try {
    browser = await playwright.launchChromium();
    const context = await browser.newContext();
    const page = await context.newPage();
    page.setViewportSize({
      width: 1200,
      height: 630,
    });
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
    `
    );
    const tags = queryStringParameters.tags
      ? decodeURIComponent(queryStringParameters.tags).split(",")
      : [];
    console.log(decodeURIComponent(queryStringParameters.author));
    await page.addScriptTag({
      content: `
            window.title = "${
              decodeURIComponent(queryStringParameters.title) || "No Title"
            }"
            window.tags = ${JSON.stringify(tags)};
            window.author = "${
              decodeURIComponent(queryStringParameters.author) || ""
            }";
        `,
    });
    await page.addScriptTag({
      content: script,
    });
    const boundingRect = await page.evaluate(() => {
      const container = document.getElementById("root-div");
      const { x, y, width, height } = container.getBoundingClientRect();
      return { x, y, width, height };
    });
    const screenshotBuffer = await page.screenshot({ clip: boundingRect });
    returnValue = {
      isBase64Encoded: true,
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Length": screenshotBuffer.length.toString(),
      },
      body: screenshotBuffer.toString("base64"),
    };
    honeycombEvent.add({ "screenshot-successful": true });
  } catch (err) {
    honeycombEvent.add({
      "error-message": err.message,
      "error-stack": err.stack,
      "screenshot-successful": false,
    });
    returnValue.body = err.message;
  } finally {
    if (browser && browser.isConnected()) {
      await browser.close();
    }
  }
  honeycombEvent.add(returnValue);
  honeycombEvent.send();
  return returnValue;
};

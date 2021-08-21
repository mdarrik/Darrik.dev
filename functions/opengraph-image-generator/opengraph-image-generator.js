const playwright = require("playwright-aws-lambda");
require("playwright-core");
const fs = require("fs");
const path = require("path");
const libHoney = require("libhoney");

const htmlString = require("./image-html-string");

const honeycomb = new libHoney({
  writeKey: process.env.HONEYCOMB_API_KEY,
  dataset: process.env.HONEYCOMB_DATA_SET,
});

const script = fs.readFileSync(path.join(__dirname, "./image.js"), "utf-8");

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
    console.log("here?");
    browser = await playwright.launchChromium();
    console.log("browser launched");
    const context = await browser.newContext();
    const page = await context.newPage();
    page.setViewportSize({
      width: 1200,
      height: 630,
    });
    console.log("page opened");
    await page.setContent(await htmlString);
    const tags = queryStringParameters.tags
      ? decodeURIComponent(queryStringParameters.tags).split(",")
      : [];
    await page.addScriptTag({
      content: `
            window.title = "${
              decodeURIComponent(queryStringParameters.title) || "No Title"
            }"
            window.tags = ${JSON.stringify(tags)};
        `,
    });
    await page.addScriptTag({
      content: script,
    });
    const boundingRect = await page.evaluate(() => {
      const container = document.body;
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

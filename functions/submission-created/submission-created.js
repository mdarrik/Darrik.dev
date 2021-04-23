const fetch = require("node-fetch");
const querystring = require("querystring");
const libHoney = require("libhoney");
const honeycomb = new libHoney({
  writeKey: process.env.HONEYCOMB_API_KEY,
  dataset: process.env.HONEYCOMB_DATA_SET,
});

exports.handler = async (event, context) => {
  const honeycombEvent = honeycomb.newEvent();
  const formId = process.env.CK_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const { name, email } = JSON.parse(event.body)?.payload;
  honeycombEvent.add({
    functionName: context.functionName,
    functionVersion: context.functionVersion,
    requestId: context.awsRequestId,
    userId: event.UserId,
    userAction: event.UserAction,
    targetUrl: url,
    hasFirstName: !!name,
    hasEmail: !!email,
    convertKitApiKey: process.env.CK_PUBLIC_KEY,
    convertKitFormId: formId,
  });
  if (!name || !name.trim() || !email || !email.trim()) {
    honeycombEvent.send();
    return {
      statusCode: 400,
      body: "Invalid Form Parameters",
    };
  }
  try {
    const requestBody = {
      api_key: process.env.CK_PUBLIC_KEY,
      first_name: name,
      email,
    };
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: process.env.CK_PUBLIC_KEY,
        first_name: name,
        email,
      }),
    });
    honeycombEvent.add({
      convertKitRequestBody: await result.json(),
      convertKitRequestStatusCode: result.status,
      convertKitRequestStatusText: result.statusText,
    });
    honeycombEvent.send();
    if (!result.ok) {
      return {
        statusCode: 500,
        body: "There was a problem adding you to the newsletter",
      };
    }

    return {
      statusCode: 303,
      headers: {
        Location: "/subscription-successful/",
      },
      body: "Redirecting...",
    };
  } catch (error) {
    honeycombEvent.addField("errorMessage", error.message);
    honeycombEvent.send();
    return {
      statusCode: 501,
      body: "There was a problem adding you to the newsletter.",
    };
  }
};

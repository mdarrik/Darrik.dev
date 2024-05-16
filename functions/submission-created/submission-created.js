const fetch = require("node-fetch");
const querystring = require("querystring");
const libHoney = require("libhoney");
const { z } = require("zod");
const honeycomb = new libHoney({
  writeKey: process.env.HONEYCOMB_API_KEY,
  dataset: process.env.HONEYCOMB_DATA_SET,
});

const contactFormSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().email(),
  message: z.string().trim().min(1),
  page: z.string().optional(),
});

exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body)?.payload;
  console.log(payload);
  const { type } = payload?.data;

  if (type === "email-subscription") {
    return handleConvertKitSubmission(payload);
  } else if (type === "contact-form") {
    const validationLogic = contactFormSchema.safeParse(payload?.data);
    if (validationLogic.success) {
      const { page } = validationLogic.data;
      return {
        statusCode: 303,
        headers: {
          Location: `/contact-form-successful/?redirect_url=${encodeURIComponent(
            page
          )}`,
        },
        body: "Redirecting to /contact-form-submitted , please wait....",
      };
    } else {
      const errors = validationLogic.error.format();
      const { page } = payload?.data;
      return {
        statusCode: 303,
        headers: {
          Location: `${page}?errors=${encodeURIComponent(
            JSON.stringify(errors)
          )}&name=${encodeURIComponent(payload?.data?.name)}&email=${
            payload?.data?.email
          }&message=${encodeURIComponent(payload?.data?.message)}#contact-form`,
        },
      };
    }
  }
};

async function handleConvertKitSubmission(payload, context) {
  const honeycombEvent = honeycomb.newEvent();
  const formId = process.env.CK_FORM_ID;
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const { name, email } = payload?.data;
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
}

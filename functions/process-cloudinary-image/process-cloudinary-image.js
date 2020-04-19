const queryString = require('querystring')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: "darrik-dev",
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
const libHoney = require('libhoney')
const honeycomb = new libHoney({
    writeKey: process.env.HONEYCOMB_API_KEY,
    dataset: process.env.HONEYCOMB_DATA_SET,
})

exports.handler = async function(event, context) {
    const {queryStringParameters} = event;
    const honeycombEvent = honeycomb.newEvent()
    honeycombEvent.add({
        functionName: context.functionName,
        functionVersion: context.functionVersion,
        requestId: context.awsRequestId,
        userId: event.UserId,
        userAction: event.UserAction,
        queryStringParameters
    })

    try {
        //https://res.cloudinary.com/darrik-dev/image/upload/v1587278753/darrik.dev/opengraph-images/transparent-png.png
        const imageUrl = cloudinary.url(
            `${process.env.DARRIK_OG_IMAGE_VERSION}/darrik.dev/opengraph-images/transparent-png.png`,
            {
                sign_url: true,
                custom_pre_function: {
                    function_type: "remote",
                    source: `https://www.darrik.dev/.netlify/functions/opengraph-image-generator?${queryString.stringify(queryStringParameters)}`
                }
            }
        )
        honeycombEvent.add({'open-graph-function-signature': `https://www.darrik.dev/.netlify/functions/opengraph-image-generator?${queryString.stringify(queryStringParameters)}` })
        honeycombEvent.send()
        return {
            statusCode: 302,
            headers: {
                Location: imageUrl
            },
            body: "boop"
        }
    } catch(error) {
        honeycombEvent.add({
            'error-message': error.message,
            'error-stack': error.stack
        });
        honeycombEvent.send()
    }
}
const { context: { parameters: { place } } } = yepcode
const _ = require("lodash");

const weatherApiClient = yepcode.integration.axios('weather-api')

weatherApiClient.get("/current.json", {
    params: {
        q: place
    },
}).then((response) => {
    console.log(`The weather in ${place} is: ${response.data.current.condition.text}`)
}).catch((err) => {
    console.error('Error executing API query', err.message)
    throw err
})
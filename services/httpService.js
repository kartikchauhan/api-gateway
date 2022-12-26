const axios = require('axios')

const httpService = {}

httpService.call = async function (req, service) {
    console.log(service)
    try {
        const requestBody = {
            method: req.method.toLowerCase(),
            baseURL: `${service.base_url}:${service.port}`,
            url: req.path,
            responseType: 'json'
            // headers: req.headers
        }

        if (req.method === 'POST') {
            requestBody.data = req.body
        }

        // console.log(requestBody)

        const response = await axios(requestBody)

        console.log(response.data)

        return response.data
    } catch (error) {
        console.error(error)
    }
}

module.exports = httpService

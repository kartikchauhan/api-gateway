const { requestResolver } = require('./requestResolver')

const Router = require('express').Router()

Router.all('*', (req, res, next) => {
    const services = requestResolver()

    let port, baseUrl, endpoints
    const reqMethod = req.method.toLowerCase()

    switch (req.url) {
    case '/users': {
        const serviceInfo = services.userService

        port = serviceInfo.port
        baseUrl = serviceInfo.base_url
        endpoints = serviceInfo.endpoints

        console.log(endpoints[reqMethod].includes('dsds'))

        if (typeof endpoints[reqMethod] === 'undefined' || !endpoints[reqMethod].includes(req.url)) {
            throw new Error('service info not found')
        } else {
            // make HTTP call to the endpoint
        }
    }
        break

    default: {
        throw new Error('service info not found')
    }
    }

    next()
})

module.exports = { Router }

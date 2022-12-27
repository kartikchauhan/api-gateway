const { requestResolver } = require('./requestResolver')
const { httpService } = require('../services')

const Router = require('express').Router()

Router.all('*', async (req, res) => {
    const servicesConfig = requestResolver()
    let service

    const reqMethod = req.method.toLowerCase()
    const reqURL = req.url

    if (reqURL === '/users') {
        service = servicesConfig.userService
    } else {
        throw new Error('Invalid URL')
    }

    const endpoints = service.endpoints

    if (typeof endpoints[reqMethod] === 'undefined' || !endpoints[reqMethod].includes(reqURL)) {
        throw new Error('Invalid endpoint')
    }

    const response = await httpService.call(req, service)
    res.send(response)
})

module.exports = { Router }

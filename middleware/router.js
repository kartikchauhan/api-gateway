const Router = require('express').Router()

Router.all('*', (req, res, next) => {
    console.log('Inside router')

    if (req.url === '/users' && req.method === 'GET') {
        // const body = req.body

        // make http call to POST /users/
    }
    next()
})

module.exports = { Router }

const Router = require('express').Router();

Router.all('*', (req, res, next) => {
    
    if (req.url === '/users/' && req.method === 'POST') {
        const body = req.body;
        // make http call to POST /users/
    }
})

module.exports = { Router };
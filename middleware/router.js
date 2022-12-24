const Router = require('express').Router();

Router.all('*', (req, res, next) => {
    next();
})

module.exports = { Router };
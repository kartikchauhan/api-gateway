const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8090

app.use(bodyParser.json())

app.listen(PORT, function () {
    console.log('UserService: listening on port ' + PORT)
})

app.get('/users', function (req, res) {
    const users = {
        users: [
            {
                name: 'Irrfan',
                email: 'irrfan@gmail.com'
            },
            {
                name: 'Naseeruddin Shah',
                email: 'naseeruddin_shah@gmail.com'
            }
        ]
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(users))
})

app.get('/users/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        name: 'Irrfan',
        email: 'irrfan@gmail.com'
    }))
})

app.post('/users', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
})

app.put('/users/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
})

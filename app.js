const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { Router } = require('./middleware');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(Router)

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
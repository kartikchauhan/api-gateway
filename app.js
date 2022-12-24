const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
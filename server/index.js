const express = require('express'),
      bodyParser = require('body-parser'),
      ctr = require('./controller')

let app = express();

app.use(bodyParser.json());

app.get('/products', ctr.read);
app.get('/products/:id', ctr.readSingleItem);

const SERVER_PORT = 5000;
app.listen(SERVER_PORT, console.log(`The Khala speaks to you on port ${SERVER_PORT}`))
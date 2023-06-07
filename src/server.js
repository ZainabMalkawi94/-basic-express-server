'use strict';

const express = require("express");
const app = express();

const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');


const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

//global middlewares
// app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send("hello from home route");
});

app.get('/test', (req, res) => {
    console.log('req', req);
    res.send('hello');
});

app.get('/person',validator, (req, res) => {
    const person = { name: req.query.name };
    res.json(person);
  });

app.use('*', notFoundHandler);
app.use(errorHandler)


function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}
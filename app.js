const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./database/connection');

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});


const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./database/connection');

app.use('/', require('./routes'));

mongodb.initDb((err, db) => {
    if (err) {
        console.log('Error connecting to the database');
        console.log(err);
      } else {
        console.log('Connected to the database');
        
        app.listen(port, () => {
            console.log(`Server running on port ${port}.`)
        });
      }
});

//call to getDb now, not before initDb^ 

app.get(mongodb);

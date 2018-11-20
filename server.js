const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');

app.use(bodyParser.urlencoded({extended: false}))    // looks for url encoded true, extended false
app.use(bodyParser.json())   //  converts data to json format and dont then need regex etc.


app.use('/api/users', users);
app.use('/api/profiles', profiles);

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'))

const port = process.env.PORT || 5000   //  set up an environment variable to use a port

app.listen(port, () => console.log('Application listening on port: ', port))

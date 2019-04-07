const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
// var users = fs.readFileSync('users.json');
// var data =JSON.parse(users)
// console.log(data)

const app = express();

// app.use(express.static('views'));

app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, '/views'));
//public is the folder where all my html file is stored
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
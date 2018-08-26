var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var router = require('./router');
var config = require('./config');

var app = express();

//Set up default mongoose connection
var mongoDBUrl = config.mongoDBUrl;
// var mongoDBUrl = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDBUrl);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);


module.exports = app;

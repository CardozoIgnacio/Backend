// 1-NPM Dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 2-App Modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carrerasRouter = require('./routes/carreras');

// 3-Inicitialization
var app = express();

// 4-MidelWares
app.use(logger('dev'));
app.use(express.json());//Interpreta los datos Json que envie el cliente
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// 5-Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carreras', carrerasRouter);

module.exports = app;

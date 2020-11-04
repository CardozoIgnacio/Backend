// 1-NPM Dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
require('../config/passport');

// 2-App Modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuarios');
var carrerasRouter = require('./routes/carreras');
var noticiasRouter = require('./routes/noticias')

// 3-Inicitialization
var app = express();

// 4-MiddleWares

app.use(session({
   secret: 'clave-secreta',
   resave: true,
   saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());//Interpreta los datos Json que envie el cliente
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 5-Routers
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/carreras', carrerasRouter);
app.use('/noticias',noticiasRouter)

module.exports = app;

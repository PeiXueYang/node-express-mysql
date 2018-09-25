var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contentRouter = require('./routes/content')
const moodsRouter = require('./routes/moods')
const uploadRouter = require('./routes/upload')
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//允许前端 跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type', "application/json;charset=utf-8");
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//这里的/ 就 代表着 public
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ss',contentRouter)
app.use('/am',moodsRouter)
app.use('/login',indexRouter);
app.use('/reg',indexRouter);
app.use('/login',indexRouter);
app.use('/main',indexRouter);
app.use('/mood',indexRouter);
app.use('/photo',indexRouter);
app.use('/shuoshuo',indexRouter);
app.use('/addshuoshuo',indexRouter);
app.use('/addmoods',indexRouter);
app.use('/photo',uploadRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

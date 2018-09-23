var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/router');
var CONFIG = require('./config.json');

mongoose.Promise = global.Promise;

var mongodbURI = 'mongodb://'+CONFIG.dbUsername+':'+CONFIG.dbPassword+'@'+CONFIG.dbHost+':'+CONFIG.dbPort+'/gu-calendar'

mongoose.connect(mongodbURI)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist/gu-calendar')));

app.use('/calendar', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
  message: err.message,
  error: err
  });
});

module.exports = app;
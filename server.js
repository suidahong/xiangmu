'use strict';

var express = require('express');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('css', function(str, option) {
  var cssList = this.cssList || [];
  if(cssList.indexOf(str)<0) {
    cssList.push(str);
  }
  this.cssList = cssList.concat();
});

hbs.registerHelper('js', function(str, option) {
  var jsList = this.jsList || [];
  if(jsList.indexOf(str)<0) {
    jsList.push(str);
  }
  this.jsList = jsList.concat();
});

hbs.registerHelper('section', function(name, block){
    if(!this._sections) this._sections = {};
    this._sections[name] = block.fn(this);
    return null;
});

hbs.registerPartials(__dirname + '/views/comps');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.render('home');
});

// Add comtus router
app.use('/alarm', require('./routes/alarm'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});

module.exports = app;
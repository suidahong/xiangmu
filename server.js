'use strict';

var express = require('express');
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

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


app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public/scss'),
    //src: __dirname,
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    //log: function (severity, key, value) { winston.log(severity, 'node-saas-middleware   %s : %s', key, value);},
    //outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.render('home');
});

// Add comtus router
app.use('/todolist', require('./routes/todolist'));
app.use('/finishedlist', require('./routes/finishedlist'));
app.use('/noticelist', require('./routes/noticelist'));
app.use('/wbmenu', require('./routes/wbmenu'));
app.use('/wbchart', require('./routes/wbchart'));
app.use('/wbcharttitle', require('./routes/wbcharttitle'));
app.use('/shortcutmenu', require('./routes/shortcutmenu'));
app.use('/alarm', require('./routes/alarm'));
app.use('/articledetail', require('./routes/articledetail'));
app.use('/articlelist', require('./routes/articlelist'));
app.use('/header', require('./routes/header'));
app.use('/tododetail', require('./routes/tododetail'));
app.use('/todolistp', require('./routes/todolistp'));
app.use('/finishedlistp', require('./routes/finishedlistp'));
app.use('/carousel', require('./routes/carousel'));

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
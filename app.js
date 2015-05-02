/**
  Showdown App - React Version
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var assets  = require('./app/middleware/assets');
var package = require('./package.json');

var isDev = ('development' == app.get('env'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

if (isDev) {
  app.use(express.errorHandler());
  assets.serve(app, package.cssPaths || []);
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  function(req, res){
  res.render('index', { title: 'DC Tech Showdown - A Nudge production' });
});

app.use(function(req, res, next){
  res.status(404);

  if (req.accepts('html')) {
    res.render('404');
    return;
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
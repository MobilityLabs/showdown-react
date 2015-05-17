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

var fauxapi = {
"start_date":"May 11",
"end_date":"May 17",
"companies":[
  { "id":"204",
    "name":"Mobility Labs",
    "url":"http:\/\/www.mobility-labs.com\/",
    "branding_logo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/mobility-nudge.png",
    "steps":70577,
    "users":[
      { "firstname":"Sumeet",
        "lastname":"singh",
        "photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/553fd99371d17315762796.jpg",
        "steps":87384
      },
      { "firstname":"Sean",
        "lastname":"Perkins",
        "photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5543a5cb4e9be740052182.jpg",
        "steps":72506
      },{"firstname":"Rick","lastname":"Metzger","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/55423ad8dfdcb928647380.jpg","steps":66545},{"firstname":"Scott","lastname":"Perez-Fox","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5548dcffb6b43786879222.jpg","steps":55872}]},{"id":"203","name":"Kit Check","url":"http:\/\/kitcheck.com\/","branding_logo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/kitcheck-logo-small@2x.png","steps":59594,"users":[{"firstname":"Lin","lastname":"Qiu","photo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/k3reRDy0q7CF4MPC.jpg","steps":77992},{"firstname":"Nick","lastname":"Fishter","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":72392},{"firstname":"Eric","lastname":"Brody","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/553fd70f3b59a007621827.jpg","steps":70198},{"firstname":"Christian","lastname":"D","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":69029},{"firstname":"Lauren","lastname":"Kokernak","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5549230765f97790685319.jpg","steps":68587},{"firstname":"Steven","lastname":"","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":60372},{"firstname":"Brian","lastname":"Absetz","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":57130},{"firstname":"Max","lastname":"Weiner","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":49759},{"firstname":"James","lastname":"Smith","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":47053},{"firstname":"Alex","lastname":"johnson","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":23428}]},{"id":"41","name":"Nudge","url":"https:\/\/www.nudgeyourself.com","branding_logo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/landing\/logo_icon@2x.png","steps":35109,"users":[{"firstname":"Chris","lastname":"Garson","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/542c26afe6bee686658802.jpg","steps":70166},{"firstname":"Mac","lastname":"Gambill","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/542ae6f6773a0842679994.jpg","steps":50441},{"firstname":"Dr.","lastname":"Steve","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/538a59097a990358667035.jpg","steps":26367},{"firstname":"Phil","lastname":"Beene","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/53347839b7036260927784.jpg","steps":26000},{"firstname":"Russ","lastname":"Campbell","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/5375191816fa2184035608.jpg","steps":23980},{"firstname":"Joe","lastname":"Fatora","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/54419e52e7fe3886328786.jpg","steps":13700}]}]}

app.get('/fauxapi', function(req, res){
  res.json(fauxapi);
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
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

var fauxapi = {"start_date":1433736000,"end_date":1434340799,"companies":[{"id":"203","name":"Kit Check","url":"http:\/\/kitcheck.com\/","branding_logo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/kitcheck-logo-small@2x.png","promo_code":"kit-check","steps":47962,"users":[{"firstname":"James","lastname":"Smith","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":72395,"on_deck":false},{"firstname":"Max","lastname":"Weiner","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":56443,"on_deck":false},{"firstname":"Lin","lastname":"Qiu","photo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/k3reRDy0q7CF4MPC.jpg","steps":56006,"on_deck":false},{"firstname":"Steven","lastname":"","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":51846,"on_deck":false},{"firstname":"Lauren","lastname":"Kokernak","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5549230765f97790685319.jpg","steps":49533,"on_deck":false},{"firstname":"Eric","lastname":"Brody","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/553fd70f3b59a007621827.jpg","steps":47306,"on_deck":false},{"firstname":"Nick","lastname":"Fishter","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":45780,"on_deck":false},{"firstname":"Christian","lastname":"D","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":41411,"on_deck":false},{"firstname":"Stephen","lastname":"Solka","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":38062,"on_deck":false},{"firstname":"Alex","lastname":"johnson","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":35762,"on_deck":false},{"firstname":"Mike","lastname":"","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":33039,"on_deck":false}]},{"id":"204","name":"Mobility Labs","url":"http:\/\/www.mobility-labs.com\/","branding_logo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/mobility-nudge.png","promo_code":"mobilitylabs","steps":47609,"users":[{"firstname":"Daniel","lastname":"Jeffers","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":78235,"on_deck":false},{"firstname":"Sumeet","lastname":"singh","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/553fd99371d17315762796.jpg","steps":64067,"on_deck":false},{"firstname":"Sean","lastname":"Perkins","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5543a5cb4e9be740052182.jpg","steps":51374,"on_deck":false},{"firstname":"Rick","lastname":"Metzger","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/55423ad8dfdcb928647380.jpg","steps":42467,"on_deck":false},{"firstname":"Scott","lastname":"Perez-Fox","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5548dcffb6b43786879222.jpg","steps":40278,"on_deck":false},{"firstname":"Mandy","lastname":"","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":9234,"on_deck":false}]},{"id":"207","name":"Optoro","url":"http:\/\/optoro.com\/","branding_logo_url":"https:\/\/api.nudgeyourself.com\/upload\/photos\/optoro-100x100.png","promo_code":"optoro","steps":35330,"users":[{"firstname":"Nicole","lastname":"Tabatabai","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":66393,"on_deck":false},{"firstname":"samantha","lastname":"sher","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":49099,"on_deck":false},{"firstname":"Rishon","lastname":"Roberts","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/556e47a613f7a029010182.jpg","steps":47443,"on_deck":false},{"firstname":"Adam","lastname":"Harris","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":41610,"on_deck":false},{"firstname":"Eric","lastname":"McKenna","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":26215,"on_deck":false},{"firstname":"Bradley","lastname":"Herrup","photo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/temp_profile_pic.png","steps":12949,"on_deck":false},{"firstname":"Evan","lastname":"David","photo_url":"https:\/\/legacy.nudgeyourself.com\/uploads\/userpic\/5576fea83483e491192373.jpg","steps":3598,"on_deck":false}]},{"id":"41","name":"Nudge","url":"https:\/\/www.nudgeyourself.com","branding_logo_url":"https:\/\/www.nudgeyourself.com\/static\/images\/landing\/logo_icon@2x.png","promo_code":null,"steps":18538,"users":[{"firstname":"Russ","lastname":"Campbell","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/5375191816fa2184035608.jpg","steps":25790,"on_deck":false},{"firstname":"Dr.","lastname":"Steve","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/538a59097a990358667035.jpg","steps":24135,"on_deck":false},{"firstname":"Joe","lastname":"Fatora","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/54419e52e7fe3886328786.jpg","steps":20680,"on_deck":false},{"firstname":"Chris","lastname":"Garson","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/542c26afe6bee686658802.jpg","steps":20305,"on_deck":false},{"firstname":"Phil","lastname":"Beene","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/53347839b7036260927784.jpg","steps":16156,"on_deck":false},{"firstname":"Mac","lastname":"Gambill","photo_url":"https:\/\/www.nudgeyourself.com\/uploads\/userpic\/542ae6f6773a0842679994.jpg","steps":4160,"on_deck":false}]}]}

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
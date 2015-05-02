var mincer = require('mincer');
require('mincer-jsx')(mincer);

exports.serve = function(app, cssPaths) {
  var environment = new mincer.Environment();

  environment.appendPath("node_modules");

  cssPaths.forEach(function(path) {
    environment.appendPath(path);
  });

  environment.appendPath('app/assets/stylesheets');
  environment.appendPath('app/assets/javascripts');
  environment.appendPath('app/assets/components');
  environment.appendPath('app/assets/images');

  mincer.logger.use(console)
  app.use('/assets', mincer.createServer(environment));
};

var jsx = require('mincer-jsx');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mince: {
        stylesheets: {
        options: {
          configure: function(mincer) {
            jsx(mincer);
          },
          include: ["./node_modules"],
          manifestOptions: {compress: true}
        },
        files: [{
            src: ["./app/assets/stylesheets/style.scss"],
            dest: "./public/assets/style.css"
          }
        ]
      },
      javascript: {
        options: {
          include: ["./node_modules"],
          manifestOptions: {
            compress: true,
            sourceMaps: false,
            embedMappingComments: false
          }
        },
        files: [{
            src: ["./app/assets/components/app.js"],
            dest:"./public/assets/app.js"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-mincer');
};
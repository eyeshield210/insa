module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! TP2 du 10 decembre 2019 */\n'
        },
        build: {
          src: 'js/*.js',
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      },
      watch: {
        scripts: {
          files: ['**/*.js'],
          tasks: ['jshint'],
          options: {
            spawn: false,
          }
        }
      },
      mochaTest: {
        test: {
          options: {
            colors: true,
            summery: true,
            reporter: 'spec',
            captureFile: 'html/results.html', // Optionally capture the reporter output to a file
            noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
          },
          src: ['test/*.js']
        }
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify','watch','mochaTest']);
  
  };
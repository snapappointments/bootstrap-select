/*global module:false*/
module.exports = function(grunt) {
'use strict';
  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['js/<%= pkg.name %>.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      dist: {
        src: ['<%= concat.dist.dest %>']
      }
    },
    less: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'less/<%= pkg.name %>.less'
        }
      },
      distMin: {
        options: {
          cleancss: true,
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'less/<%= pkg.name %>.less'
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      distJS: {
        files: '<%= jshint.dist.src %>',
        tasks: ['jshint:dist']
      },
      distLess: {
        files: 'less/<%= pkg.name %>.less',
        tasks: ['less']
      }
    },
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['dist-js', 'dist-css']);
  grunt.registerTask('dist-js', ['concat', 'jshint', 'uglify']);
  grunt.registerTask('dist-css', ['less']);

};

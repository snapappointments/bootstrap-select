
module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    grunt.file.defaultEncoding = 'utf8';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * Bootstrap Select v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
                ' * Plugin demo <%= pkg.demopage %>\n' +
                ' */\n',
        jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',
        clean: {
            js: 'js/<%= pkg.name %>*',
            css: 'css/<%= pkg.name %>*'
        },
        concat: {
            css: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/<%= pkg.name %>.css'],
                dest: 'css/<%= pkg.name %>.css'
            },
            js: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/<%= pkg.name %>.js'],
                dest: 'js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                report: 'min',
                banner: '<%= banner %>'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            compress: {
                options: {
                    cleancss: true,
                    keepSpecialComments: '*',
                    banner: '<%= banner %>',
                    noAdvanced: true, // turn advanced optimizations off until it's fixed in clean-css
                    report: 'min',
                    selectorsMergeMode: 'ie8'
                },
                src: 'css/<%= pkg.name %>.css',
                dest: 'css/<%= pkg.name %>.min.css'
            }
        },
        less: {
            compile: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    banner: '<%= banner %>',
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'css/<%= pkg.name %>.css.map'
                },
                files: {
                    'css/<%= pkg.name %>.css': 'src/<%= pkg.name %>.less'
                }
            }
        },
        csslint: {
            options: {
                csslintrc: 'src/.csslintrc'
            },
            src: [
                'css/<%= pkg.name %>.css'
            ]
        },
        jshint: {
            options: {
                jshintrc: 'src/.jshintrc'
            },
            src: {
                src: 'js/*.js'
            }
        },
        jscs: {
            options: {
                config: 'src/.jscs.json'
            },
            src: {
                src: 'js/*.js'
            }
        },
        validation: {
            options: {
                charset: 'utf-8',
                doctype: 'HTML5',
                failHard: true,
                reset: true,
                relaxerror: [
                    'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
                    'Element img is missing required attribute src.'
                ]
            },
            files: {
                src: 'demo/*.html'
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // A very basic default task.
    grunt.registerTask('help', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('build-js', ['clean:js', 'concat:js', 'jshint', 'jscs', 'uglify']);
    grunt.registerTask('build-css', ['clean:css', 'less', 'csslint', 'cssmin']);
    grunt.registerTask('build', ['clean', 'concat', 'less', 'jshint', 'jscs', 'csslint', 'uglify', 'cssmin', 'validation']);
    grunt.registerTask('build-all', 'build');
};
/**
 * Setup directory
 */
var basePath = '../';
var cssPath = basePath + 'css/';
var jsPath = basePath + 'js/';


var idx = 0;

/**
 * App js
 */
require('./Appjslist.js');
for (idx = 0; idx < gruntConfig.app.jslist.length; idx++) {
    gruntConfig.app.jslist[idx] = basePath + gruntConfig.app.jslist[idx];
}

/**
 * Grunt
 */
module.exports = function(grunt){
    /**
     * Configure main project settings
     */
    grunt.initConfig({

        /**
         * Basic settings and info about plugins
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * LESS
         */
        less: {
            app: {
                options: {
                    paths: [basePath + 'css']
                },
                files: (function() {
                    var res = {};
                    res[cssPath + 'app.css']= basePath + 'less/style.less';
                    return res;
                })()
            },
            appmin: {
                options: {
                    compress: true,
                    paths: [basePath + 'css']
                },
                files: (function() {
                    var res = {};
                    res[cssPath + 'app.min.css']= basePath + 'less/style.less';
                    return res;
                })()
            }
        },

        /**
         * Concatenate files
         */
        concat: {
            corecss: {
                src: [basePath + 'core/third_party/**/*.css'],
                dest: cssPath + 'core.css'
            },

            appjs: {
                options: {
                    separator: ';'
                },
                src: gruntConfig.app.jslist,
                dest: jsPath + 'app.js'
            },
        },

        /**
         * JS min
         */
        uglify: {
            options: {
                compress: true// ,
                // banner: '/*! generated at  <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            app: {
                src: gruntConfig.app.jslist,
                dest: jsPath + 'app.min.js'
            }
        },

        /**
         * CSS min
         */
        cssmin: {
            options: {
                yuicompress: true// ,
                // banner: '/*! generated at  <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            app: {
                src: [cssPath + 'app.css'],
                dest: cssPath + 'app.min.css'
            }
        },

        /**
         * Validate files with JSHint
         */
        jshint: {
            core: {
                options: {
                    sub: true
                },
                files: {
                    src: [basePath + 'core/js/**/*.js']
                }
            },

            app: {
                files: {
                    src: [basePath + 'js/**/*.js']
                }
            }
        },

        /**
         * Run predefined tasks whenever watched file patterns are added, changed or deleted.
         */
        watch: {
            corecss: {
                files: [
                    basePath + 'core/*.css',
                    basePath + 'core/*/*.css'
                ],
                tasks: ['concat:corecss']
            },

            appless: {
                files: [
                    basePath + 'less/*.less',
                    basePath + 'less/*/*.less'
                ],
                tasks: ['less:app']
            },

            appjs: {
                files: [basePath + 'js/**/*.js'],
                tasks: ['uglify:app']
            }
        }
    });


    // load the plugin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Do the task
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', [
        'jshint',

        'uglify',

        'concat'
    ]);

    grunt.registerTask('buildcss', [
        'less',
        'cssmin'
    ]);
};

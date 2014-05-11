'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        casper: {
            functional: {
                options : {
                    test: true,
                },
                src: [grunt.option('test') || 'test/spec/functional/{,*/}*.js']
            }
        }
    });

    grunt.registerTask('test', function (target) {
        grunt.task.run([
            'casper'
        ]);
    });

    grunt.registerTask('default', [
        'test'
    ]);
};

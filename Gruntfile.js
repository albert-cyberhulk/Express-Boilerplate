'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});

    //compile config from separate files
    var config = require('load-grunt-configs')(grunt, {
        config: {
            src: 'grunt/config/*.js'
        }
    });

    grunt.initConfig(config);

    // starts dev server on local env
    grunt.registerTask('serve', [
        'sass',
        'express:dev',
        'watch'
    ]);
};

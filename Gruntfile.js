/*
 * grunt-plugin-listfiles
 * https://github.com/balki7/grunt-plugin-listfiles
 *
 * Copyright (c) 2017 Balkı Gemirter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        listFiles: {
            options: {
                folderToScan: './',
                debug: true
            },
            dev: {
                src: ['./node_modules']
            },
            prod: {
                options: {
                    debug: false
                },
                files: [{
                    src: './node_modules'
                }
                ]
            }
        }

    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['listFiles']);
};

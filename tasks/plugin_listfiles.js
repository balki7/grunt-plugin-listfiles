/*
 * grunt-plugin-listfiles
 * https://github.com/balki7/grunt-plugin-listfiles
 *
 * Copyright (c) 2017 Balkı Gemirter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var _dumpDebugInformation = function (target) {
        var options = target.options();
        var files = target.files;

        if (!options.debug) {
            return;
        }

        grunt.log.writeln("Running target : " + target.target);
        grunt.log.writeflags(options, 'Target Options');

        target.filesSrc.forEach(function (filePath) {
            grunt.log.writeln("Configured Folder: " + filePath);
        });
    };

    var _listFolder = function (target) {
        target.filesSrc.forEach(function (folderPath) {
            if (grunt.file.isDir(folderPath)){
                grunt.file.recurse(folderPath, function (abspath, rootdir, subdir, filename) {
                    if (grunt.file.isFile(abspath)) {
                        grunt.log.writeln("Found file   %s", abspath);
                    }
                });
            }
        });
    };

    grunt.registerMultiTask('listFiles', 'The Grunt plugin that lists files in the given directory recursively.', function () {
        var options = this.options({debug: false});
        _dumpDebugInformation(this);
        _listFolder(this);
    });
};

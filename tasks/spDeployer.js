/*
 * grunt-sp-deployer
 * https://github.com/carlosinit/grunt-sp-deployer
 *
 * Copyright (c) 2016 Carlos da Silva
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {


    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('spDeployer', 'Grunt task enabling the upload of customization files to a SharePoint site', function () {
        //Recovering the configuration data
        var config = this.data;
        if (!config.siteCollectionUrl) {
            grunt.log.error('Site collection url is not in the config: "siteCollectionUrl"');
            return false;
        }
        
        if(!config.username){
            grunt.log.error('Username is not in the config : "username"');
            return false;
        }
        
        if(!config.username){
            grunt.log.error('Password is not in the config : "password"');
            return false;
        }
        

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            grunt.log.writeln(f);
        });
        //       // Concat specified files.
        //       var src = f.src.filter(function(filepath) {
        //         // Warn on and remove invalid source files (if nonull was set).
        //         if (!grunt.file.exists(filepath)) {
        //           grunt.log.warn('Source file "' + filepath + '" not found.');
        //           return false;
        //         } else {
        //           return true;
        //         }
        //       }).map(function(filepath) {
        //         // Read file source.
        //         return grunt.file.read(filepath);
        //       }).join(grunt.util.normalizelf(options.separator));
        // 
        //       // Handle options.
        //       src += options.punctuation;
        // 
        //       // Write the destination file.
        //       grunt.file.write(f.dest, src);

        // Print a success message.
        grunt.log.writeln('Files pushed to SharePoint');
    });
};

'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        src: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        yeoman: yeomanConfig,
        clean: {
            dist: ['<%= yeoman.dist %>'],
        },
        jshint : {
        	options: {
		    	jshintrc: '.jshintrc'
		    },
		    main : {
		    	expand : true,
				cwd: '<%=  yeoman.src %>',
				src : ['**/*.js']
			}
        },
        uglify: {
        	options: {
		      
		    },
        	main : {
		    	expand : true,
		    	dest: '<%=  yeoman.dist %>', 
				cwd: '<%=  yeoman.src %>',
				src : ['**/*.js']
			}
        }
    });
    
    grunt.registerTask('default', [
    	'clean',
        'jshint',
        'uglify'
    ]);
};

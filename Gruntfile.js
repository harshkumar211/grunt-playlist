

module.exports = function(grunt){

  // Configuration
  grunt.initConfig({
    // pass in options to plugins and references to files etc
    concat: {
      js:{
        src:['js/*.js'],
        dest:'build/scripts.js'
      },
      css:{
        src:['css/*.css'],
        dest:'build/styles.js'
      }
    },
    uglify:{
      build : {
				src : ["js/*.js"],
				dest : "build/script.min.js"
			}
    }
  });

  //load plugins

grunt.loadNpmTasks('grunt-contrib-concat')
grunt.loadNpmTasks('grunt-contrib-uglify')
/*
  // Register the tasks which need to be grunt
  grunt.registerTask('run',function(){
    console.log("I am running the task run");
  });

  // Register the tasks which need to be grunt
  grunt.registerTask('sleep',function(){
    console.log("I am sleeping");
  });

  grunt.registerTask('all',['sleep','run']);
  */


  grunt.registerTask('concat-js',['concat:js'])
  grunt.registerTask('concat-css',['concat:css'])
}

module.exports = function(grunt){
  grunt.initConfig({
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:'*.css'
    },
    htmlhint:{
      options:{
        htmlhintrc:'.htmlhintrc'
      },
      src:'*.html'
    },
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:['*.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  
  grunt.registerTask('lint',['csslint','htmlhint','eslint']);

};

module.exports = function(options) {

  var gulp       = options.gulp,
      livereload = options.livereload

  gulp.task('watch-handlebars', function() {

    return gulp.src('**/*.hbs', {read: false})
      .pipe(livereload())
  })

}

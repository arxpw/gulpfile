var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('css', function() {
  gulp.src('./sass/main.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(concat('production.css'))
      .pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
  return gulp.src(
    [
      './js/jquery.matchHeight.min.js',
      './js/jquery.carouselTicker.js',
      // './js/bootstrap.min.js',
      './js/calc.min.js',
      './js/jquery.lazy.min.js',
      './js/slick.min.js',
      // './js/bootstrap-select.min.js',
      './js/javascript.js'
    ])
  .pipe(concat('production.js'))
  .pipe(gulp.dest('./js/'));
})

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss', ['css']);
    gulp.watch('js/**/*.js',     ['js']);
});

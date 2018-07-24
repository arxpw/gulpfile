// Include Gulp
var gulp = require('gulp');

// Include plugins
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

// Define the base folders
var src  = 'assets/src';
var dist = 'assets/dist';

// Concatenate & Minify JS
gulp.task( 'scripts', function () {
   
    return gulp.src([
        // Uncomment the line below and change the path to the node_module you need
        // 'node_modules/some-package/dist/file.js',
        src + 'js/vendor/*.js',
        src + 'js/*.js'
    ])
    .pipe( concat( 'main.js' ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( uglify() )
    .pipe( gulp.dest( dist + '/js' ) );
    
});

gulp.task( 'sass', function () {

    return sass(src + '/scss/main.scss', { style: 'compressed' })
        .pipe( sourcemaps.init() )
        .pipe( autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest( dist + '/css' ) );

});

gulp.task( 'watch', function () {
    
    // Watch .js files
    gulp.watch( src + 'js/vendor/*.js', ['scripts'] );
    gulp.watch( src + 'js/*.js', ['scripts'] );

    // Watch .scss files
    gulp.watch( src + 'css/scss/**/*.scss', ['sass'] );

});

// Default Task
gulp.task( 'default', ['scripts', 'sass', 'watch'] );
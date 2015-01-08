var gulp = require( 'gulp' );
var browserify = require( 'gulp-browserify' );
var concat = require( 'gulp-concat' );
var cssmin = require('gulp-cssmin');

gulp.task( 'browserify' , function() {
  gulp.src( 'src/scripts/main.js' )
    .pipe( browserify( { transform: 'reactify' } ) )
    .pipe( concat( 'main.js' ) )
    .pipe( gulp.dest( 'dist/scripts' ) );
} );

gulp.task( 'styles', function() {
  gulp.src( [ 'src/styles/reset.css' ] )
    .pipe( concat( 'reset.css' ) )
    .pipe( cssmin() )
    .pipe( gulp.dest( 'dist/styles' ) );
} );

gulp.task( 'copy', function() {
  gulp.src( 'src/index.html' )
    .pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'watch' , function() {
  gulp.watch( 'src/**/*.*', [ 'default' ] );
} );

gulp.task( 'default', [ 'browserify', 'styles', 'copy', 'watch' ] );

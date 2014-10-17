var gulp = require('gulp'),
	minHtml = require('gulp-minify-html')
	connect = require('gulp-connect')
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css');

gulp.task('connect', function() {
  connect.server({
    root: '.build/',
    livereload: true
  });
});

/*gulp.task('min-html', function(){
	gulp.src('app/src/*.html')
		.pipe(minHtml())
		.pipe(gulp.dest('.build/'))
});*/

gulp.task('scripts', function(){
	gulp.src('app/src/js/*.js') 
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('.build/js'))
	.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('app/src/css/*.css')
	.pipe(concatCss('all.min.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('.build/css'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('app/*.html')
  	.pipe(minHtml())
	.pipe(gulp.dest('.build/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch('app/src/js/*.js', ['scripts']);
  gulp.watch('app/src/css/*.css', ['css']);
});

gulp.task('default', ['connect', 'watch', 'scripts', 'css', 'html']);
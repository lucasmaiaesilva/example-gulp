//módulos usados na aplicação
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

/* 
task que minifica e concatena em um só arquivo
todos os arquivos dentro da pasta js que tem a 
extensão .js e os salva no arquivo all.min.js 
dentro da pasta .build
*/
gulp.task('scripts', function(){
	gulp.src('src/js/*.js') 
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('.build'));
});
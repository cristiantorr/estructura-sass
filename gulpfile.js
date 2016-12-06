 /*
 Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  sass = require('gulp-sass');
  cssmin = require('gulp-cssmin');
  rename = require('gulp-rename');

/*
* Configuración tarea javascript
*/
gulp.task('javascript', function () {
  gulp.src(['js/main.js', 'js/function.js'])
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js'))
});
/*
* configuracion tareas sass
*/
 gulp.task('sass', function(){
  return gulp.src(['scss/main.scss', 'scss/header.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('sass-minify', function () {
    gulp.src('css/all.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['javascript', 'sass', 'sass-minify']);

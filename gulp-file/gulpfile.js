/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
  sass = require('gulp-ruby-sass');


/*
* Configuración de la tarea 'javascript'
*/
gulp.task('javascript', function () {
  gulp.src('../js/*.js')
  .pipe(concat('minifyjavascript.js'))
  .pipe(uglify())
  .pipe(gulp.dest('../js/'))
});
/*
* Configuración de la tarea 'sass'
*/
gulp.task('styles', function() {
     sass('../scss/**/*.scss')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('../css/'))
})

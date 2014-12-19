var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat-util');

gulp.task('compile', function() {
  var blyModule = fs.readFileSync('./src/bly.coffee', 'utf8') + "\r\n";

  gulp.src(['./src/**/*.coffee', '!./src/bly.coffee'])
    .pipe(concat.header(blyModule))
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./build/'))

  gulp.src(['./src/bly.coffee', './src/**/*.coffee'])
    .pipe(concat('bly.js')) 
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {
  gulp.watch('./src/**/*.coffee', ['compile']);
});
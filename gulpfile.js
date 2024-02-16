'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp
        .src('./assets/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
  };
  
  exports.buildStyles = buildStyles;
  exports.watch = function () {
    gulp.watch('./assets/sass/*.scss', ['sass']);
  };
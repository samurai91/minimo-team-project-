var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat');
var concatCss = require('gulp-concat-css');

// Запускаем сервер, предварительно скомпилировав SASS
gulp.task('serve', ['sass'], function() {

    bs.init({
      server: "./src"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
    		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    		.pipe(autoprefixer({
    		browsers: ['last 2 versions'],
    		cascade: false
        }))
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);
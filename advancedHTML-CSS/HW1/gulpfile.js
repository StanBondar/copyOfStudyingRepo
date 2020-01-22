const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-js-minify'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    imageMin = require('gulp-imagemin');

const buildScss = () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'));
}

const cleanFolder = () => {
    return gulp.src('./dist/', {read: false})
        .pipe(clean());
}

const buildJs = () => {
    return gulp.src('./src/js/*.js')
        // .pipe(concat('main.js'))
        // .pipe(uglify())
        // .pipe(minify())
        .pipe(gulp.dest('./dist/js/'));
}

const fontIconsBuild = () => {
    return gulp.src('./src/webfonts/*')
        .pipe(gulp.dest('./dist/webfonts/'));
}

const copyNormalizeCSS = () => {
    return gulp.src('./src/*css')
        .pipe(gulp.dest('./dist/css/'));
}

const imageBuild = () => {
    return gulp.src('./src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/img/'))
}

const watch = () => {
    gulp.watch('./src/scss/**/*.scss', buildScss).on('change', browserSync.reload);
    gulp.watch('./src/js/*.js', buildJs).on('change', browserSync.reload);
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

gulp.task('dev', gulp.series(watch));
gulp.task('build', gulp.series(cleanFolder, buildScss, copyNormalizeCSS, buildJs, imageBuild, fontIconsBuild));
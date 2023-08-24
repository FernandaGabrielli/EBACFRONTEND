const gulp = require('gulp');
const sass = require('gulp-sass') (require ('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')
const sourcemaps = require('gulp-sourcemaps');

function compilationSass() {
    return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle:'compressed' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/style'))
}

function minificationImages() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function minificationJavascript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}


exports.default = function () {
    gulp.watch('./source/style/*.scss', { ignoreInitial: false }, gulp.series(compilationSass))
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(minificationImages))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(minificationJavascript))
};
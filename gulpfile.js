const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function copyHTML() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'));
}

function sassCompiler() {
    return gulp.src('./src/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function jsCompress() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function imgCompress() {
    return gulp.src('./src/assets/medias/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/media'))
}

exports.default = () => {
    gulp.watch('./src/*.html', { ignoreInitial: false }, gulp.series(copyHTML));
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(sassCompiler));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(jsCompress));
    gulp.watch('./src/assets/medias/*', { ignoreInitial: false }, gulp.series(imgCompress));
}
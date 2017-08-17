var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    prefix = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

//server connect
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('sass', function() {
        gulp.src('sass/style.sass')
        .pipe(prefix('last 15 versions'))
        .pipe(connect.reload())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//html
gulp.task('html', function () {
    gulp.src('html/index.html')
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function (){
    gulp.watch('html/index.html', ['html']);
    gulp.watch('.sass/*.sass', ['sass']);
});

gulp.task('default', ['connect', 'html', 'sass', 'watch']);

'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('./config');
const { isDev } = config;

gulp.task('clean', () => {
    return gulp.src(config.dist)
        .pipe($.clean());
});

gulp.task('html', () => {
    return gulp.src(config.html.src)
        .pipe(gulp.dest(config.html.dist));
});

gulp.task('less', () => {
    return gulp.src(config.less.src)
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.if(isDev, $.sourcemaps.init()))
        .pipe($.less())
        .pipe($.if(isDev, $.sourcemaps.write('.')))
        .pipe(gulp.dest(config.less.dist));
});

gulp.task('css', () => {
    return gulp.src(config.css.src)
        .pipe(gulp.dest(config.css.dist));
});

gulp.task('js', () => {
    return gulp.src(config.js.src)
        .pipe(gulp.dest(config.js.dist));
});

gulp.task('font', () => {
    return gulp.src(config.font.src)
        .pipe(gulp.dest(config.font.dist));
});

gulp.task('img', () => {
    return gulp.src(config.img.src)
        .pipe(gulp.dest(config.img.dist));
});

gulp.task('watch', () => {
    gulp.watch(config.html.watch, ['html']);
    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.css.watch,  ['css']);
    gulp.watch(config.js.watch,   ['js']);
    gulp.watch(config.img.watch,  ['img']);
    gulp.watch(config.all, ['reload']);
});

gulp.task('reload', () => {
    return gulp.src(config.all)
        .pipe($.connect.reload());
});

gulp.task('server', () => {
    $.connect.server({
        root: config.server.root,
        port: config.server.port,
        livereload: true
    });
});

// 默认任务
gulp.task('default', ['clean'], () => {
    gulp.run('html', 'less', 'css', 'js', 'font', 'img');
    if (isDev) {
        gulp.run('watch', 'reload', 'server')
    }
});

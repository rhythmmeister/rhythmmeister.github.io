/*
 Use 'gulp serve' while developing, because the serve task
 does not minify the css and does not remove the debug info.

 Use 'gulp build' when on a production environment. This task
 will minify the css and removes comments and debug info.

 Run 'npm install' to install the required node packages. The
 used packages are listed below.
 */

var gulp = require('gulp'),
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    filesystem = require('fs'),
    postcss = require('gulp-postcss'),
    rhythmmeister = require('rhythmmeister'),
    path = require('path');

// Setup browsersync.
gulp.task('browsersync', function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
});

// Compile sass for development with comments and debug info.
gulp.task('sass-serve', function() {
    var fontPresets = rhythmmeister.load(path.resolve('./app/font-presets'));

    var processors = [
        rhythmmeister.processor(fontPresets)
    ];

    gulp.src('app/styles/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({
        style: 'expanded',
        sourceComments: 'normal'
    }).on('error', function (err) {
        console.log(err)
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.stream());
});

// Compile and minify sass for production without comments and debug info.
gulp.task('sass-build', function() {
    var fontPresets = rhythmmeister.load(path.resolve('./font-presets'));
    var processors = [
        rhythmmeister.processor(fontPresets)
    ];

    gulp.src(['sass/**/*.{scss,sass}'])
    .pipe(sassGlob())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'));
});

// Development task.
gulp.task('serve', ['browsersync', 'sass-serve'], function() {
    gulp.watch(['app/styles/**/*.scss', 'app/font-presets.json'], function () {
        gulp.run('sass-serve');
    });
});

// Production/deployment/build task.
gulp.task('build', function() {
    gulp.run('sass-build');
});
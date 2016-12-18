var gulp = require('gulp'),
    browserSync = require('browser-sync');

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

// Development task.
gulp.task('serve', ['browsersync'], function() {
    gulp.watch(['app/index.html'], function () {
        browserSync.reload()
    });
});

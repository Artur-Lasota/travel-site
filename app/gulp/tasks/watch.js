var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function(){

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    });
});

gulp.task('scriptsRefresh', ['scripts'], function(){
    browserSync.reload();
});
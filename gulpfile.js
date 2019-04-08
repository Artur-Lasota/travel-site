require('./app/gulp/tasks/styles.js');
require('./app/gulp/tasks/watch.js');
require('./app/gulp/tasks/scripts.js');

var gulp = require('gulp');

gulp.task('default', function(){
    console.log("Gulp task created");
});

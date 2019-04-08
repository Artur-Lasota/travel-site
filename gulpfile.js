require('./gulp/tasks/styles.js');
require('./gulp/tasks/watch.js');
require('./gulp/tasks/scripts.js');

var gulp = require('gulp');

gulp.task('default', function(){
    console.log("Gulp task created");
});

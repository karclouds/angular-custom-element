const gulp = require('gulp');
const concat = require('gulp-concat');
 

// Combine script and main as single bundle.js
gulp.task('bundle-ui-shell', function() {
  return gulp.src([
    'dist/custom-element/scripts.js',
    'dist/custom-element/main.js',    
  ])
    .pipe(concat('bundle.js', { newLine: ';' }))
    .pipe(gulp.dest('dist/custom-element'));
});


gulp.task('build-app', gulp.series(['bundle-ui-shell']));
gulp.task('default', gulp.series(['build-app']));
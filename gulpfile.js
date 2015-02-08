var path = require('path');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
 
gulp.task('build', function() {
  return browserify({
      entries: [
        './js/react-component.js'
      ],
      transform: [ reactify ],
      debug: true,
      cache: { },
      packageCache: { },
      fullPaths: true
    })
    .bundle()
    .pipe(source('react-select-bootstrap.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

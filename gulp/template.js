const gulp = require('gulp');
const jade = require('gulp-jade');
const rn = require('gulp-rename');

gulp.task('template', () => {
    "use strict";

    gulp.src('frontend/blocks/layout.jade')
        .pipe(jade({pretty: true}))
        .pipe(rn('index.html'))
        .pipe(gulp.dest('dist/public'));
});

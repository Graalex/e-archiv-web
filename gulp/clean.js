const gulp = require('gulp');
const del = require('gulp-deleted');

gulp.task('clean',() => {
	gulp.src(__dirname)
		.pipe(del('dist/**'))
})

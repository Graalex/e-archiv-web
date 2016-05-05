const gulp = require('gulp');

gulp.task('build:server', () => {
	gulp.src(['api/**/*', '!api/logs/'])
	.pipe(gulp.dest('dist/api'));

gulp.src(['server.js', 'conf.js', 'package.json'])
	.pipe(gulp.dest('dist'));
});

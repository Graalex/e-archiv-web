const gulp = require('gulp');

gulp.task('build:server', () => {
	gulp.src(['api/**/*', '!api/logs/'])
	.pipe(gulp.dest('dist/api'));

	gulp.src(['server.js', 'config.js', 'package.json', 'LICENSE'])
	.pipe(gulp.dest('dist'));
});

gulp.task('build:client', ['template']);

gulp.task('build', ['clean', 'build:server', 'build:client']);

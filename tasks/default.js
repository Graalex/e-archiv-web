import seq from 'run-sequence';
import gulp from 'gulp';

gulp.task('default', () => {
	seq(
		[
			'styles',
			'template'
		],
		'server',
		'watch'
	)
});

gulp.task('build', () => {
	seq(
			[
			'styles',
			'template'
			],
			'scripts'
			//'copy'
	)
});

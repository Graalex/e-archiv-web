import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import rename from 'gulp-rename';
import errorHandler from 'gulp-plumber-error-handler';
import prettify from 'gulp-jsbeautifier';
import inheritance from 'gulp-jade-inheritance';
import cached from 'gulp-cached';
import filter from 'gulp-filter';
import seq from 'run-sequence';

const data = {
	timestamp: Date.now()
}

gulp.task('template:layout', () => (
	gulp.src(['app/**/*.jade', '!app/tmpl/**/*.jade'])
		.pipe(plumber({errorHandler: errorHandler(`Error in \'templates:layout\' task`)}))
		.pipe(cached('jade'))
		.pipe(gulpIf(global.watch, inheritance({basedir: 'app'})))
		.pipe(filter(file => /app[\\\/]pages/.test(file.path)))
		.pipe(jade({basedir: 'app', data}))
		.pipe(gulpIf(process.env.PRETTIFY !== false, prettify({
			braceStyle: 'expand',
			indentWithTabs: true,
			indentInnerHtml: true,
			preserveNewlines: true,
			endWithNewline: true,
			wrapLineLength: 120,
			maxPreserveNewlines: 50,
			wrapAttributesIndentSize: 1,
			unformatted: ['use']
		})))
		.pipe(rename({dirname: '.'}))
		.pipe(gulp.dest('dist'))
));

gulp.task('template:tmpl', () => (
		gulp.src('app/tmpl/**/*.jade')
				.pipe(plumber({errorHandler: errorHandler(`Error in \'templates:tmpl\' task`)}))
				.pipe(cached('jade:tmpl'))
				//.pipe(gulpIf(global.watch, inheritance({basedir: 'app/tmpl'})))
				.pipe(jade({basedir: 'app/tmpl', data}))
				.pipe(gulpIf(process.env.PRETTIFY !== false, prettify({
					braceStyle: 'expand',
					indentWithTabs: true,
					indentInnerHtml: true,
					preserveNewlines: true,
					endWithNewline: true,
					wrapLineLength: 120,
					maxPreserveNewlines: 50,
					wrapAttributesIndentSize: 1,
					unformatted: ['use']
				})))
				//.pipe(rename({dirname: '.'}))
				.pipe(gulp.dest('dist/tmpl'))
));

gulp.task('template', () => (
		seq(
				[
						'template:layout',
						'template:tmpl'
				]
		)
));

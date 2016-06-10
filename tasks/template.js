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

gulp.task('template', () => (
	gulp.src('app/**/*.jade')
		.pipe(plumber({errorHandler: errorHandler(`Error in \'templates\' task`)}))
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

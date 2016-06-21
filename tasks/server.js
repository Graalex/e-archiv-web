import { create as browserSync } from 'browser-sync';
import gulp from 'gulp';

const bs = browserSync('server');
const { PORT, OPEN, NODE_ENV, TUNNEL } = process.env;

gulp.task('server', () => (
	bs.init({
		files: ['dist/**/*'],
		open: !!OPEN,
		reloadOnRestart: true,
		port: PORT || 3000,
		snippetOptions: {
			rule: {
				match: /<\/body>/i
			}
		},
		server: {
			baseDir: [
				'app/resources',
				'dist'
			],
			directory: false
		},
		tunnel: !!TUNNEL
	})
));

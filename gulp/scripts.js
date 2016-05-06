const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('scripts', () => {
	"use strict";
		gulp.src('frontend/scripts/app.js')
			.pipe(webpack(require('../webpack.config.js')))
			.pipe(gulp.dest('dist/public/assets/scripts'));
});

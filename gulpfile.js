const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => gulp.src(['src/**/*.js', '!node_modules/**'])
             .pipe(eslint({ useEslintrc: true, fix: true }))
             .pipe(eslint.format()));

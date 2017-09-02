const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

const distPath = './dist';
const javascriptPath = './src/**/*.js';

gulp.task('javascript:clean', () => {
  return gulp.src(`${distPath}/*`, {read: false})
    .pipe(clean());
});

gulp.task('javascript:process', ['javascript:clean'], () => {
  return gulp.src(javascriptPath)
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest(distPath));
});

gulp.task('javascript:watch', () => {
  gulp.watch(javascriptPath, ['javascript:process']);
});

gulp.task('default', [
    'javascript:process',
    'javascript:watch',
]);

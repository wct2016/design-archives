'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import gulp from 'gulp';

//---------------------------------------------------------------------------
// Tasks
//---------------------------------------------------------------------------
gulp.task('watch', () => {
  gulp.watch([paths.jadePath  + '**/*.jade'], ['jade']);
  gulp.watch([paths.jsPath    + '**/*.*'], ['bundle:js']);
  gulp.watch([paths.scssPath  + '**/*.scss'], ['sass']);
});

gulp.task('default', [
  'jade',
  'sass',
  'bundle:js',
  'watch',
  'browserSync'
]);

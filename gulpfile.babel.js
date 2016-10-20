'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths, options, sassConf } from './gulp/config';

import  { argv } from 'yargs';
import browserSync from 'browser-sync';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssGlobbing from 'gulp-css-globbing';
import sourcemaps from 'gulp-sourcemaps';

import './gulp/jade';
import './gulp/bundlejs';
import './gulp/tasks';

//---------------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------------
gulp.task('sass', () => {
  return gulp.src(paths.scssPath + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(cssGlobbing({ extensions: ['.scss'] }))
    .pipe(sass(sassConf).on('error', sass.logError))
    .pipe(autoprefixer(options.autoprefix))
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: paths.scssPath
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

//---------------------------------------------------------------------------
// BrowserSync
//---------------------------------------------------------------------------
gulp.task('jade:bs', ['jade'], () => {
  browserSync.reload();
  return;
});
gulp.task('bundlejs:bs', ['bundle:js'], () => {
  browserSync.reload();
  return;
});

gulp.task('browserSync', () => {
  let args = {};

  if (argv.mode == 'server' ) {
    args.server =  { baseDir: paths.root };
    args.startPath = paths.docs;
  } else {
    args.proxy =  paths.vhost;
    args.open = 'external';
  }

  browserSync.init(args);

  gulp.watch([paths.jadePath  + '**/*.jade'], { interval: 500 }, ['jade:bs']);
  gulp.watch([paths.jsPath    + '**/*.*'], { interval: 500 }, ['bundlejs:bs']);
  gulp.watch([paths.htmlDest  + '*.html'], {interbal: 500}).on('change', browserSync.reload);
})

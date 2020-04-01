/**
 * @file
 * Description.
*/

"use strict";

// Load plugins!
const gulp         = require("gulp");
const sass         = require("gulp-sass");
const plumber      = require("gulp-plumber");
const browsersync  = require("browser-sync").create();
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require("autoprefixer");
const strip        = require('gulp-strip-comments');
const concat       = require('gulp-concat');
const postcss      = require("gulp-postcss");

// BrowserSync!
function browserSync(done) {
  browsersync.init({
    proxy: "http://basetheme" //You local url to the site
  });
  done();
}

// BrowserSync Reload!
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task!
function css() {
  return gulp
  .src("./dev/scss/**/*.scss")
  .on('error', catchErr)
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass({ outputStyle: "compressed" }, {errLogToConsole: true}))
  .on('error', catchErr)
  .pipe(postcss([autoprefixer]))
  .pipe(sourcemaps.write("./map"))
  .pipe(gulp.dest("./css"))
  .pipe(browsersync.stream({match: '**/*.min.css'}));
}

function cssMin() {
  return gulp
    .src("./dev/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest("./css"))
}

// Transpile, concatenate and minify scripts!
function scripts() {
  return (
    gulp
      .src(["./dev/js/**/*"])
      .pipe(gulp.dest("./js"))
      .pipe(browsersync.stream())
  );
}

function bootstrapJs() {
  return (
    gulp
    .src(["./node_modules/bootstrap/dist/js/bootstrap.min.js", "./node_modules/popper.js/dist/umd/popper.min.js"])
    .pipe(strip())
    .pipe(gulp.dest("./js"))
  );
}

// Watch files!
function watchFiles() {
  gulp.watch("./dev/scss/**/*", css);
  gulp.watch("./dev/js/**/*", scripts);
  gulp.watch("./templates/**/*", browserSyncReload);
}

// Define complex tasks!
const build = gulp.series(gulp.parallel(cssMin, scripts, bootstrapJs));
const watch = gulp.parallel(watchFiles, browserSync);

function catchErr(e) {
  console.log(e);
  this.emit('end');
}

// Export tasks!
exports.watch = watch;
exports.default = build;

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    bower = require('gulp-bower'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanDest = require('gulp-clean-dest');

var paths = {
    webroot: "app/",
    lib:  "lib/",
    dist: "dist/"
};

gulp.task('clean', function () {
    del(paths.dist);
    del(paths.lib);
});

gulp.task('bower', function () {
    return bower();
});


gulp.task('scripts', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(gulp.dest(paths.dist + "js/"));
//        .pipe(uglify())
//        .pipe(gulp.dest(paths.dist));
});


gulp.task('lessStyles', function () {
    return gulp.src('app/less/main.less')
        .pipe(autoprefixer("last 2 version", "> 1%", "Explorer >= 8", {
            cascade: true
        }))
        .pipe(less())
        .pipe(cssmin())
        .pipe(cleanDest('out'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dist + "styles/"));
});

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('images', function () {
    return gulp.src("app/images/**/*.*")
        .pipe(gulp.dest(paths.dist + "images/"));
});

gulp.task('files', function () {
    gulp.src("app/files/*.*")
    .pipe(gulp.dest(paths.dist + "files/"));
});

gulp.task('fonts', function(){
    return gulp
        .src([
            'app/fonts/**/*.*'
        ])
        .pipe(gulp.dest(paths.dist + 'fonts/'));
});

gulp.task('video', function(){
    return gulp
        .src([
            'app/video/**/*.*'
        ])
        .pipe(gulp.dest(paths.dist + 'video/'));
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*', ['scripts']);
  gulp.watch('app/less/*.less', ['lessStyles']);
  gulp.watch(['app/*.html', 'app/**/*.html'], ['html']);
  gulp.watch('app/images/**/*.*', ['images']);
});

gulp.task("build", ["bower", "lessStyles", "scripts", "fonts", "images", "html", "files", "video"]);

gulp.task('browser-sync', ['build'], function () {
    var files = [
      'app/**/*.html',
      'app/less/**/*.css',
      'app/images/**/*.png',
      'app/video/**/*',
      'app/js/**/*.js',
      'dist/**/*'
   ];
    
   browserSync.init(files, {
      server: {
         baseDir: "dist",
         routes: {"/bower_components": "bower_components"},
         index: "index.html"
      }
   });

    // Watch any files in dist/, reload on change
    gulp.watch(['app/**']).on('change', browserSync.reload);
});

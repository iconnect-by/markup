var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    bower = require('gulp-bower'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    webserver = require('gulp-webserver');

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
    return gulp.src(['app/less/**/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dist + "styles/"));
});

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest(paths.dist));
});

gulp.task('fonts', function () {
    return gulp.src("app/fonts/**/*.*")
        .pipe(gulp.dest(paths.dist + "fonts/"));
});

gulp.task('images', function () {
    return gulp.src("app/img/**/*.*")
        .pipe(gulp.dest(paths.dist + "images/"));
});

gulp.task('files', function () {
    gulp.src("app/files/*.*")
    .pipe(gulp.dest(paths.dist + "files/"));
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*', ['scripts']);
  gulp.watch('app/less/*.less', ['lessStyles']);
  gulp.watch(['app/*.html', 'app/views/*.html'], ['html']);
});

gulp.task("build", ["bower", "lessStyles", "scripts", "fonts", "images", "html", "files"]);

gulp.task('browser-sync', ['build'], function () {
    var files = [
      'app/**/*.html',
      'app/les/**/*.css',
      'app/img/**/*.png',
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

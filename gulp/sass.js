var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var _ = require('lodash');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var path = require('path');

var plumberSettings = {
  errorHandler: notify.onError({
    title: 'Sass Error',
    icon: path.join(__dirname, '../assets/sass.png'),
    message: '<%= error.message %>'
  })
};

gulp.task('sass', function () {
  var settings = _.extend({
    // sourceComments: 'map',
    imagePath: '/images' // Used by the image-url helper
  }, {
    outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'nested'
  });

  return gulp.src('./scss/**/*.{sass,scss}')
    .pipe(plumber(plumberSettings))
    //.pipe(sourcemaps.init())
    .pipe(sass(settings))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'] }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream:true}));
});

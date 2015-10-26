var path = require('../paths.js'),
    gulp = require('gulp'),
    compass = require('gulp-compass');



var opts = {
  sass: path.src.sass,
  css: path.tmp.css,
  style: "expanded",
  time: true,
  comments: false,
  // require: 'sass-globbing',
  // image: path.src.img,
  import_path: [
    path.bowerComp + 'foundation/scss/'
  ]
};



gulp.task('compass', function() {

  gulp.src([
    path.src.styles + '**/style.scss',
    path.src.styles + '**/style.*.scss'
  ])
    .pipe(compass(opts))
    .pipe(gulp.dest(path.build.css));
});




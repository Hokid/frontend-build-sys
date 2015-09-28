/**
 * ------------------------------------------------------------------------
 *     Ссылки на плагины
 * ------------------------------------------------------------------------
 *
 * gulp-compass -> https://www.npmjs.com/package/gulp-compass
 * browser-sync -> http://www.browsersync.io/
 * main-bower-files -> https://www.npmjs.com/package/main-bower-files
 * gulp-htmlmin -> https://www.npmjs.com/package/gulp-htmlmin
 * gulp-ruby-sass -> https://www.npmjs.com/package/gulp-ruby-sass
 * gulp-include -> https://www.npmjs.com/package/gulp-include
 * gulp-htmlincluder -> https://www.npmjs.com/package/gulp-htmlincluder/
 * gulp-csso -> https://www.npmjs.com/package/gulp-csso
 * minimist -> https://www.npmjs.com/package/minimist
 *
 * Для compass:
 * sass-globbing -> https://github.com/chriseppstein/sass-globbing
 */



/**
 * ------------------------------------------------------------------------
 *     Загрузка плагинов
 * ------------------------------------------------------------------------
 */

var gulp = require('gulp'),
    compass = require('gulp-compass');



/**
 * ------------------------------------------------------------------------
 *     Директории проэкта
 * ------------------------------------------------------------------------
 */

// Рабочая директория

var workingDir = 'working-dir/';

// Путь до пакетов, установленных через бовер

var bowerComp = 'bower_components/';

// Пути в рабочей директории

var path = {

    // Пути до исходников

    src: {
      root: workingDir + 'src/',
      get sass() {
        return this.root + 'sass/';
      },
      get styles() {
        return this.sass + 'styles/';
      },
      get sassTest() {
        return this.root + 'sass-test/';
      },
      get html() {
        return this.root + 'html/';
      },
      get img() {
        return this.root + 'img/';
      },
      get fonts() {
        return this.root + 'fonts/';
      },
      get js() {
        return this.root + 'js/';
      },
      get jsVendors() {
        return this.js + 'vendors/';
      }
    },

    // Пути для собранных(скомпилированных) файлов

    build: {
      root: workingDir + 'build/',
      get css() {
        return this.root + 'css/';
      },
      get html() {
        return this.root + 'html/';
      },
      get img() {
        return this.root + 'img/';
      },
      get fonts() {
        return this.root + 'fonts/';
      },
      get js() {
        return this.root + 'js/';
      },
      get jsVendors() {
        return this.js + 'vendors/';
      }
    },

    // Путь до статики на продакшене

    production: {
      root: "../"
    },

    // Временная папка

    tmp: {
      root: workingDir + '@tmp/',
      get css() {
        return this.root + 'css/';
      },
      get html() {
        return this.root + 'html/';
      },
      get sass() {
        return this.root + 'sass/';
      }
    }
};



/**
 * ------------------------------------------------------------------------
 *     Настройки плагинов
 * ------------------------------------------------------------------------
 */

var opts = {

    compass: {

      sass: path.src.sass,
      css: path.tmp.css,
      style: "expanded",
      time: true,
      comments: false,
      // require: 'sass-globbing',
      // image: path.src.img,
      import_path: [
        bowerComp + 'foundation/scss/'
      ]
    },

    browserSync : {

      server: {
        baseDir: path.build.root
      },
      port: 8000,
      ui: false,
      online: false,
      open: false,
      //files: path.build.root + "**/*",
      notify: false,
      ghostMod: false,
      logPrefix: "ff-frontend"
    },

    htmlmin: {
      removeComments: true
    },

    uglifyJs: {
      mangle: false
    }
};





//===============================================
//
// Задачи
//
//===============================================

gulp.task('compass', function() {

  gulp.src([
    path.src.styles + '**/style.scss',
    path.src.styles + '**/style.*.scss'
  ])
    .pipe(compass(opts.compass))
    .pipe(gulp.dest(path.build.css));
});




gulp.task('compass:test', function() {

  gulp.src([
    path.src.styles + '@test/style.scss'
  ])
    .pipe(compass(opts.compass))
    .pipe(gulp.dest(path.tmp.css));
});


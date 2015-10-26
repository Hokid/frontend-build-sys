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

var rDir = require('require-dir');

rDir('./gulp/tasks', { recurse: true });




/**
 * ------------------------------------------------------------------------
 *     Настройки плагинов
 * ------------------------------------------------------------------------
 */

// var opts = {

//     compass: {

//       sass: path.src.sass,
//       css: path.tmp.css,
//       style: "expanded",
//       time: true,
//       comments: false,
//       // require: 'sass-globbing',
//       // image: path.src.img,
//       import_path: [
//         bowerComp + 'foundation/scss/'
//       ]
//     },

//     browserSync : {

//       server: {
//         baseDir: path.build.root
//       },
//       port: 8000,
//       ui: false,
//       online: false,
//       open: false,
//       //files: path.build.root + "**/*",
//       notify: false,
//       ghostMod: false,
//       logPrefix: "ff-frontend"
//     },

//     htmlmin: {
//       removeComments: true
//     },

//     uglifyJs: {
//       mangle: false
//     }
// };



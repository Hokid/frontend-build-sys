/**
 * ------------------------------------------------------------------------
 *     Директории проэкта
 * ------------------------------------------------------------------------
 */



// Рабочая директория

var  workingDir = 'working-dir/';

// Путь до пакетов, установленных через бовер

var  bowerComp = 'bower_components/';



module.exports = {
  workingDir: workingDir,
  bowerComp: bowerComp,
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

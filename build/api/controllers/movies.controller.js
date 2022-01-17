"use strict";

var _require = require('../services/movies.service'),
    getMovies = _require.getMovies;

var getMoviesData = function getMoviesData() {
  return new Promise(function (resolve, reject) {
    getMovies().then(function (res) {
      var _res$data, _res$data2;

      if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.entries && (res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.entries.length) > 0) {
        var _res$data3;

        resolve(res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.entries);
      }
    })["catch"](function (error) {
      reject(error);
    });
  });
};

module.exports = {
  getMoviesData: getMoviesData
};
const { getMovies } = require('../services/movies.service');

const getMoviesData = () => {
  return new Promise((resolve, reject) => {
    getMovies()
    .then(res => {
      if (res.data?.entries && res?.data?.entries.length > 0) {
        resolve(res.data?.entries)
      }
    })
    .catch(error => {
      reject(error);
    });
  });
}

module.exports = { getMoviesData };

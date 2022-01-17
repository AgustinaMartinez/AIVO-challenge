const axios = require('axios');
const config = require ('../../config');

const getMovies = async () => {
  const res = await axios.get(`${config.movies_url}`);
  return res;
};

module.exports = { getMovies };

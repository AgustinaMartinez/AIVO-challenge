const express = require('express');
const { getMoviesData } = require('../controllers/movies.controller');

const router = express.Router();

router.get('/movies', async (req, res) => {
  const result = await getMoviesData();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({message: 'Not found'});
  };
});

module.exports = router;

"use strict";

var express = require('express');

var movies = require('./routes/movies.route'); // Inizialization


var router = express(); // Middlewares

router.use(express.json()); // Routes

router.use('/api', movies);
/*http://localhost:4000/api/movies*/

router.use('/', function (req, res) {
  return res.json('BFF for Movies API');
});
/*http://localhost:4000/*/

module.exports = router;
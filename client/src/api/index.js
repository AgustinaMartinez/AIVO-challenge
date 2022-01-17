const express = require('express');
const movies = require('./routes/movies.route');

// Inizialization
const router = express();

// Middlewares
router.use(express.json());

// Routes
router.use('/api', movies); /*http://localhost:4000/api/movies*/
router.use('/', (req, res) => res.json('BFF for Movies API')); /*http://localhost:4000/*/

module.exports = router;

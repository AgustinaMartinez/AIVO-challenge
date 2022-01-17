const express = require('express');
const path = require('path');
const config = require('../config');
const router = require('../api');

// Inizialization
const app = express();

// Settings
const port = process.env.PORT || config.port;

// Middlewares
app.use(express.json());
app.use(router);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(port), () => {
  console.log(`Server on port ${port}`);
};

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = { app };

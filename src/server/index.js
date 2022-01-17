const express = require('express');
const path = require('path');
const config = require('../config');
const router = require('../api');

// Inizialization
const app = express();

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json());
app.use(router);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(app.get(process.env.PORT || 'port'), () => {
  console.log(`Server on port ${process.env.PORT || app.get('port')}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = { app };

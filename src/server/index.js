const express = require('express');
const config = require('../config');
const router = require('../api');

// Inizialization
const app = express();

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json());
app.use(router);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${process.env.PORT || app.get('port')}`);
});

module.exports = { app };

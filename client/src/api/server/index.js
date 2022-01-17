const express = require('express');
const config = require('../../api/config');
const router = require('../../api/index');

// Inizialization
const app = express();

// Settings
app.set('port', config.port);

// Middlewares
app.use(express.json());
app.use(router);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

module.exports = { app };
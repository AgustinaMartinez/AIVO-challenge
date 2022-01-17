"use strict";

var express = require('express');

var config = require('../config');

var router = require('../api'); // Inizialization


var app = express(); // Settings

app.set('port', config.port); // Middlewares

app.use(express.json());
app.use(router);
app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port')));
});
module.exports = {
  app: app
};
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

var app = express();

require('./config/express')(app, config);

// mongoose.connect(config.db);
// var db = mongoose.connection;
// db.on('error', function () {
//   throw new Error('unable to connect to database at ' + config.db);
// });
//
// db.once('open', function() {
  app.listen(config.port, function () {
    console.log('Ready on port ' + config.port);
  });
// });

module.exports = app;


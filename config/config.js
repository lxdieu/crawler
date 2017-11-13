var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bongda-crawler'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bongda-crawler-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bongda-crawler'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bongda-crawler-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bongda-crawler'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bongda-crawler-production'
  }
};

module.exports = config[env];

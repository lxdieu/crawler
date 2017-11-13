var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
  return res.json([1,2,3,4]);
});

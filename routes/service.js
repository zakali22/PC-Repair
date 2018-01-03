const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('service', { 
  	title: 'Service',
  	service: data

  });
});

module.exports = router;

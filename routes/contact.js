const express = require('express');
const router = express.Router();
const mailer = require('express-mailer');
const app = express();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
  	title: 'Contact Us'
  });
});


module.exports = router;

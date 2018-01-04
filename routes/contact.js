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

router.post('/send', (req, res, next) => {
	app.mailer.send('email', {
	    to: 'ha225ahmed@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
	    subject: 'Message from ' + req.body.name // REQUIRED. 
	  }, (err) => {
	    if (err) {
	      // handle error 
	      console.log(err);
	      res.send('There was an error sending the email');
	      return;
	    }
	    res.send('Email Sent');
	});
});

module.exports = router;

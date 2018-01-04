const express = require('express');
const router = express.Router();
const mailer = require('express-mailer');
const app = express();


mailer.extend(app, {
  from: 'zakeria.hussien@gmail.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'zakeria.hussien@gmail.com',
    pass: 'Cairo2years2010'
  }
});


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

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
  	title: 'Contact Us'
  });
});

router.post('/send', (req, res, next) => {
	const transporter = nodemailer.createTransport('SMTP', {
		service: 'Gmail',
		auth: {
			user: 'zakeria.hussien@gmail.com',
			pass: 'Cairo2years2010'
		}
	});
	// Data to send
	const mailOptions = {
		from: "'Zakeria Ali' <" + req.body.email + ">",
		to: 'ha225ahmed@gmail.com',
		subject: 'Message from ' + req.body.name,
		html: '<p>You have been sent a message from PC Repair:</p><ul><li><p>Name: ' + req.body.name + '</p></li><li><p>Email: ' + req.body.email + '</p></li><li><p>Message: ' + req.body.message + '</p></li>'
	};
	
	transporter.sendMail(mailOptions, (err, info) => {
		if(err){
			return console.log(err);
		}
		console.log("Message sent " + info.response);
		res.send('Done'); 
		console.log(req.body.email);
	});
});

module.exports = router;

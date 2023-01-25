var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mootez.belleh.omrani.geologist@gmail.com',
    pass: 'typehere'
  }
});

var mailOptions = {
  from: 'mootez.belleh.omrani.geologist@gmail.com',
  to: 'mootez-ing@outlook.com',
  subject: 'Sending Email using Node.js',
  text: 'Done !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

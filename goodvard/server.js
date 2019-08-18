const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

let transport = nodemailer.createTransport({
  host: 'smtp.yandex.ru', // hostname
  //secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
      user: 'goodvardschool@yandex.ru',
      pass: '***'
  }
});

// setup e-mail data with unicode symbols
let mailOptions = {
  from: "goodvardschool@yandex.ru", // sender address
  to: "slava.tresnevv@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world ✔", // plaintext body
  html: "<b>Hello world ✔</b>" // html body
}

let sendMail = (getResRef) => {
  // send mail with defined transport object
  transport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log("Error sending mail: ", error);
      //res.send({data: error});
    }else{
      console.log("Message sent: " + response.message);
      //res.send({data: response.message});
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/sendEmail', (req, res) => {
  console.log("Get request: Send Email");
  //sendMail(res);  
});

app.listen(port, () => console.log(`Listening on port ${port}`));
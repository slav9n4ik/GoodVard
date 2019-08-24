const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const transport = require('./mail-config.js');
const https = require("https");
const fs = require("fs");


const app = express();
const port = process.env.PORT || 5000;

// setup e-mail data with unicode symbols
let mailOptionsToClient = {
  from: "goodvardschool@yandex.ru", // sender address
  to: "", // list of receivers
  subject: "Сообщение с формы обратной связи в GoodVard", // Subject line
  text: "✔" // plaintext body
  //html: "<b>Hello world ✔</b>" // html body
}

let mailOptionsToGoodVard = {
  from: "goodvardschool@yandex.ru", // sender address
  to: "goodvardschool@yandex.ru", // list of receivers
  subject: "Сообщение с формы обратной связи в GoodVard", // Subject line
  text: "✔" // plaintext body
  //html: "<b>Hello world ✔</b>" // html body
}

let sendMailToGoodVard = (ajaxResponse, data) => {
  let msg = "Имя: " + data.name +"\n" + "Телефон: " + data.phone + "\n" +
            "Email: " + data.email + "\n" +
            "Текст сообщения: " + data.message + "\n";

  mailOptionsToGoodVard.text = msg;
  // send mail with defined transport object
  transport.sendMail(mailOptionsToGoodVard, function(error, response){
    if(error){
      console.log("Error sending mail: ", error);
      ajaxResponse.send("error");
    }else{
      console.log("Message sent: " + data.message);
      sendMailToClient(data);
      ajaxResponse.send("success");
    }
  });
}

let sendMailToClient = (data) => {
  let msg = "Добрый день, " + data.name + ". Ваше сообщение доставлено."+
            " Наш сотрудник скоро обязательно с Вами свяжется. Спасибо за обращение!\n" + 
            "Искренне Ваш Гудвард!";

  mailOptionsToClient.to = data.email;
  mailOptionsToClient.text = msg;
  // send mail with defined transport object
  transport.sendMail(mailOptionsToClient, function(error, response){
    if(error){
      console.log("Error sending mail: ", error);
    }else{
      console.log("Message sent: " + response.message);
    }
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/client", 'build')));

app.post('/api/sendEmail', (req, res) => {
  console.log("Post request: Send Email: ", req.body.data);
  sendMailToGoodVard(res, req.body.data) 
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/client", 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
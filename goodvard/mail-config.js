const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host: 'smtp.yandex.ru', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: 'goodvardschool@yandex.ru',
        pass: ''
    }
  });
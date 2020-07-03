const nodemailer = require('nodemailer');

let username = "adminganteng"
let password = "passwordbiasa"
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'perpus.fathur.panji@gmail.com',
           pass: 'cdaaptnia'
       }
   });

   const mailOptions = {
    from: 'perpus.fathur.panji@gmail.com', // sender address
    to: 'user.fathurpanji@gmail.com', // list of receivers
    subject: 'Subject aja', // Subject line
    html: 
    
    `<h1>Anda telah mendaftar menjadi admin di di <a href="#">perpustakaan sederhana</a> </h1>
    
    <h3>detail: </h3>
    <p>username : ${username}</p>
    <p>password : ${password}</p>`// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
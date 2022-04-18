const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: 'jyotichauhan20@navgurukul.org',
        pass: 'Jyoti123@'
    }
});
  
let mailDetails = {
    from: 'jyotichauhan202navgurukul.org',
    to: 'gudia21@navgurukul.org',
    cc:'muskan20@navgurukul.org',
    bcc:'muskanvalmikee@gmail.com',
    subject: 'Test mail',
    text: 'HI muskan I m jyoti from up'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});


app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})




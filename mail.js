var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'iotplat1@gmail.com',
           pass: 'maormaor'
       }
});

// const mailOptions = {
//     from: 'iotplat1@gmail.com', // sender address
//     to: 'idosurfer@gmail.com', // list of receivers
//     subject: 'Subject of your email', // Subject line
//     html: '<p>Your html here</p>'// plain text body
// };
module.exports.sendMail = function(mailOptions){
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}
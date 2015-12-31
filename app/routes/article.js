var express = require('express');
var router = express.Router();

// -------> load mongoose modules
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restcore');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // Once our connection opens, our callback will be called. For brevity, let's assume that all following code is within this callback.
  console.log('yay! mongodb connected!');
});

// With mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.

var articleSchema = mongoose.Schema({
  title: String
});
var articleModel = mongoose.model('articles', articleSchema);



/* GET home page. */
router.get('/', function(req, res) {
  // var ticketEntity = new ticketModel(req.body);
  // ticketEntity.save(function (err, test) {
  //   if (err) return console.error(err);
  //   console.log(ticketEntity.text);
  //
  //   // create reusable transporter object using SMTP transport
  //   var transporter = nodemailer.createTransport({
  //     host: 'smtp.exmail.qq.com',
  //     secure: true,
  //     ignoreTLS: true,
  //     port: 465,
  //     auth: {
  //         user: 'noreply@gamebau.com',
  //         pass: 'hiBau2015'
  //     }
  //   });
  //   // NB! No need to recreate the transporter object. You can use
  //   // the same transporter object for all e-mails
  //   // setup e-mail data with unicode symbols
  //   var mailOptions = {
  //       from: 'Gamebau ✔ <noreply@gamebau.com>', // sender address
  //       to: 'allen@gamebau.com, allenkung@gamebau.com', // list of receivers
  //       subject: 'Hello ✔', // Subject line
  //       text: 'Hello world ✔', // plaintext body
  //       html: 'hello allen' // html body
  //   };
  //
  //   // send mail with defined transport object
  //   transporter.sendMail(mailOptions, function(error, info){
  //       if(error){
  //           return console.log(error);
  //       }
  //       console.log('Message sent: ' + info.response);
  //   });
  //
  // });

  // SEARCH
  articleModel.find(function(err, results) {
    console.log(results);
    res.json(results);
  });

  // res.send('hello');
});

router.put('/', function(req, res) {
  res.send('PUT request to homepage');
});

router.delete('/', function(req, res) {
  res.send('DELETE request to homepage');
});



module.exports = router;

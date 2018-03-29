const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// Defining methods for the usersController
module.exports = {
  create: function (req, res) {
    var myPlainTextPassword = req.body.password;

    bcrypt.hash(myPlainTextPassword, saltRounds, function (err, hash) {

      db.User
        .create({
          email: req.body.email,
          password: hash
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.log(err);
          res.json(err)
        });
    });
  },

  login: function (req, res) {
    // console.log("body", req.body)
    // var myPlainTextPassword = req.body.password;

    // Load hash from your password DB.
    // const hash = bcrypt.compare(myPlaintextPassword, hash, function (err, res) {
    //   // res == true
    // });
    db.User
      .findOne({
        email: req.body.email,
        password: req.body.password
      })
      .then(dbModel => res.send(dbModel))
      .catch(err => {
        console.log(err);
        res.json(err)
      });
    }
}

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
          username: req.body.username,
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
    db.User
      .findOne({ username: req.body.username }, function (err, user) {
        if (err) throw err;
        // test a matching password
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) throw err;
          console.log(req.body.password, isMatch); // -&gt; Password123: true
          if (isMatch) {
            return res.json(user)
          }
          else {
            return res.send("no account")
          }
        })
        // .then(dbModel => {
        //   console.log(dbModel, "dbmodel");
        //   res.send(dbModel)})
        // .catch(err => {
        //   console.log(err);
        //   res.json(err)
        // });
      });
  }
};


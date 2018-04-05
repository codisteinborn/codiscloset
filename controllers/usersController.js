const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            return res.json(user)
          }
          else {
            return res.send("no account")
          }
        })
      });
  }
};


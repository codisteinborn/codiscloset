const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// Defining methods for the usersController
module.exports = {
  create: function (req, res) {
    // console.log(req.body);
    // console.log("-------------------------");
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
  }
};

const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

router.route("/login")
  .post(usersController.login)

// Matches with "/api/users/:email"
// router
//   .route("/:email")
//   .get(usersController.findByEmail)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;

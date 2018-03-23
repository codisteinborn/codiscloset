const router = require("express").Router();
const prodsController = require("../../controllers/prodsController");

// Matches with "/api/prods"
router.route("/")
  .get(prodsController.findAll)
  .post(prodsController.create);

// Matches with "/api/prods/:id"
router
  .route("/:id")
  .get(prodsController.findById)
  .put(prodsController.update)
  .delete(prodsController.remove);

module.exports = router;

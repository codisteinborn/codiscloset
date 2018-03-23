const router = require("express").Router();
const prodRoutes = require("./prods");

// Prod routes
router.use("/prods", prodRoutes);

module.exports = router;

const router = require("express").Router();
const prodRoutes = require("./prods");
const userRoutes = require('./users')

// Prod routes
router.use("/prods", prodRoutes);
// User routes
router.use("/users", userRoutes);

module.exports = router;

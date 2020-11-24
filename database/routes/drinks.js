const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.drinks.index);
router.get("/:id", ctrl.drinks.show);

// exports
module.exports = router;
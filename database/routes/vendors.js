const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.vendors.index);
router.get("/:id", ctrl.vendors.show);

// exports
module.exports = router;
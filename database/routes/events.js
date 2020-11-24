const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.events.index);
router.get("/:id", ctrl.events.show);
router.post("/", ctrl.events.create);
router.put("/:id", ctrl.events.update);
router.delete("/:id", ctrl.events.destroy);

// exports
module.exports = router;
var router = require('express').Router();

router.use("/member", require("../controllers/member-controller"));
router.use("/points", require("../controllers/points-entries-controller"));

module.exports = router;
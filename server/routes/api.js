var router = require('express').Router();

router.use("/students", require("../controllers/member-controller"));
router.use("/points", require("../controllers/points-entries-controller"));
router.use("/point-submissions", require("../controllers/point-submissions-controller"));

module.exports = router;
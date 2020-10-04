var router = require('express').Router();

router.use("/member", require("../controllers/member.api"));
router.use("/house", require("../controllers/house.api"));

module.exports = router;
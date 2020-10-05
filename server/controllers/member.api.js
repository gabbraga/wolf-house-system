'use strict'

const router = require("express").Router();
const member = require("../models/member");

//get all wolf members
router.get("/", function (req, res) {

});

//get a wolf member, specified by ID
router.get("/:id", function (req, res) {
 
});

// add a new wolf member
router.post("/", function (req, res) {
    
});

//edit a wolf member, specified by ID
router.put("/:id", function(req, res) {

});

//delete a wolf member, specified by ID
router.delete("/:id", function (req, res) {
    
});

module.exports = router;
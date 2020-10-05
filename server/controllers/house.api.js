'use strict'

const router = require("express").Router();
const House = require("../models/house");

//get all houses 
router.get("/", function (req, res) {

});

//get a house, specified by ID
router.get("/:id", function (req, res) {
 
});

// add a new house
router.post("/", function (req, res) {
    
});

//edit a house, specified by ID
router.put("/:id", function(req, res) {

});

//delete a house, specified by ID
router.delete("/:id", function (req, res) {
    
});

module.exports = router;
'use strict'

const router = require("express").Router();
const Member = require("../models/member");

//get all wolf members
router.get("/", function (req, res) {
    Member.find()
        .exec()
        .then(members=>{
            res.status(200).json(members);
        })
        .catch(err=> {
            console.log(err);
        })
        .finally(()=>{
            res.end();
        });
});

//get a wolf member, specified by ID
router.get("/:id", function (req, res) {
    
});

// add a new wolf member
router.post("/", function (req, res) {
    const member = new Member({
        name: req.body.name,
        house: req.body.house,
        type: req.body.type
    });
    member.save().then(result=> {
        console.log(result); 
    })
    .catch(err=>{
        console.log(err);
    });
    res.status(201).json({
        message:"handling post",
        createdMember: member
    });
});

//edit a wolf member, specified by ID
router.put("/:id", function(req, res) {

});

//delete a wolf member, specified by ID
router.delete("/:id", function (req, res) {
    
});

module.exports = router;
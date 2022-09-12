'use strict'

const router = require("express").Router();
const Member = require("../models/member");

//get all wolf members
router.get("/", function (req, res) {
    
    let filter = {};

    if(req.query) {
      if(req.query.grade) {
        filter['grade'] = {
          '$regex': req.query.grade,
          '$options': "i"
        }
      }
  
      if(req.query.teacher) {
        filter['teacher'] = {
          '$regex': req.query.teacher,
          '$options': "i"
        }
      }
  
      if(req.query.house) {
        filter['house'] = {
          '$regex': req.query.house,
          '$options': "i"
        }
      }
    }

    Member.find(filter)
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

//get a wolf member by name
router.get("/:name", function (req, res) {
    Member.findOne({
        name: req.params.name
    })
    .exec()
    .then(member=>{
        res.status(200).json(member);
    })
    .catch(err=> {
        console.log(err);
    })
    .finally(()=>{
        res.end();
    });
    
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

//edit a wolf member, specified by name
router.put("/:name", function(req, res) {
    Member.findOneAndUpdate({
        name: req.params.name
    },
    {
        name: req.body.name,
        house: req.body.house,
        type: req.body.type
    },
    (err, member)=> {
        console.log(member);
    }
    );
    res.status(201).json({
        //updatedMember: member
    });
    res.end();
});

//delete a wolf member, specified by name
router.delete("/:name", function (req, res) {
    
});

module.exports = router;
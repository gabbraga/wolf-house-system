'use strict'

const router = require("express").Router();
const objectId = require("mongoose").Types.ObjectId;
const PointSubmission = require("../models/point-submission");

//get point totals by house
router.get("/leaderBoardTotals", function (req, res) {
  PointSubmission.aggregate([
        {
          '$group': {
            '_id': '$house', 
            'totalPoints': {
              '$sum': {
                '$add': '$points'
              }
            }
          }
        }, {
          '$sort': {
            '_id': 1
          }
        }
      ])
        .exec()
        .then(totals=>{
            res.status(200).json(totals);
        })
        .catch(err=> {
            console.log(err);
        })
        .finally(()=>{
            res.end();
        });
});

//get all point submissions
router.get("/", function (req, res) {
  let filter = {};

  if(req.query) {
    if(req.query.grade) {
      filter['grade'] = {
        '$regex': req.query.grade,
        '$options': "i"
      }
    }

    if(req.query.staff) {
      filter['staff'] = {
        '$regex': req.query.staff,
        '$options': "i"
      }
    }

    if(req.query.house) {
      filter['house'] = {
        '$regex': req.query.house,
        '$options': "i"
      }
    }

    if(req.query.studentId) {
      filter['studentId'] = objectId(req.query.studentId)
    }
  }

  PointSubmission.find(filter)
        .exec()
        .then(totals=>{
            res.status(200).json(totals);
        })
        .catch(err=> {
            console.log(err);
        })
        .finally(()=>{
            res.end();
        });
});

router.post("/", function (req, res) {
  if(req.body) {
    const submission = new PointSubmission({
      studentId: req.body.studentId,
      date: req.body.date,
      house: req.body.house,
      paw: req.body.paw,
      comments: req.body.comments,
      staff: req.body.staff,
      points: req.body.points
    });
    submission
    .save()
    .catch( err => {
        console.log(err);
    });
    /* res.status(201).json({
        message:"handling post",
        createdSubmission: submission
    }); */
    res.status(201).send({
      message:"handling post",
      createdSubmission: submission
    });
  } else {
    res.status(400).json({
      message:"invalid request"
    });
  }
})

module.exports = router;

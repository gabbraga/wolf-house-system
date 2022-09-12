'use strict'

const router = require("express").Router();
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

module.exports = router;

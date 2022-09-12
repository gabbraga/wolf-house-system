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

module.exports = router;

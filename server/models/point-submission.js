const mongoose = require("mongoose");
const db = require ('../config/db').db;

//define the schema; ie what will be the fields in the documents
const pointSubmissionSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    studentId: { type: mongoose.Types.ObjectId },
    date: { type: Date, required: true },
    house: { type: String, required: true },
    paw: { type: String, required: true },
    comments: { type: String, required: true },
    staff: { type: String, required: true },
    points: {type: Number, required: true}
}, {
 versionKey: false
});

//compile the schema into a model; a model is a class with which we construct documents
const pointSubmissionModel = db.model('PointSubmission', pointSubmissionSchema, 'point-submissions');

module.exports = pointSubmissionModel;
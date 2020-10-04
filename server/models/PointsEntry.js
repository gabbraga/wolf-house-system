const mongoose = require("mongoose");

const PointsEntry = new mongoose.Schema({
    date: {type: Date, required: true},
    member: {type: Member, required: true},
    staffMember: {type: Member, required: true},
    reason: {type: String, required: true},
    comments: {type: String, required: true},
    points: {type: Number, required: true}
});

//compile the schema into a model; a model is a class with which we construct documents
const pointsEntryModel = mongoose.model('PointsEntry', PointsEntry);

module.exports = pointsEntryModel;
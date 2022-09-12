const mongoose = require("mongoose");
const db = require ('../config/db').db;

//define the schema; ie what will be the fields in the documents
const memberSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    house: { type: String, required: true },
    memberType: {type: String, required: true},
    pointHistory: {type: Object}
}, {
 versionKey: false
});

//compile the schema into a model; a model is a class with which we construct documents
const memberModel = db.model('Member', memberSchema, 'members');

module.exports = memberModel;
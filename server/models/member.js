const mongoose = require("mongoose");

//define the schema; ie what will be the fields in the documents
const Member = new mongoose.Schema({
    /* _id: { type: mongoose.Schema.ObjectId, auto: true }, */
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    house: { type: String, required: true } //change string to house later
}, {
 versionKey: false
});

//compile the schema into a model; a model is a class with which we construct documents
const memberModel = mongoose.model('Member', Member);

module.exports = memberModel;
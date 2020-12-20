const mongoose = require("mongoose");

//define the schema; ie what will be the fields in the documents
const memberSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    house: { type: String, required: true },
    type: {type: String, required: true}
}, {
 versionKey: false
});

//compile the schema into a model; a model is a class with which we construct documents
const memberModel = mongoose.model('Member', memberSchema);

module.exports = memberModel;
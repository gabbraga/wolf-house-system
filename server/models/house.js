const mongoose = require("mongoose");

const House = new mongoose.Schema({
    name: {type: String, required: true },
    points: {type: Number, required: true}
});

//compile the schema into a model; a model is a class with which we construct documents
const houseModel = mongoose.model('House', House);

module.exports = houseModel;
const mongoose = require("mongoose");

//define the schema; ie what will be the fields in the documents
let userSchema = new mongoose.Schema({
 _id: { type: mongoose.Schema.ObjectId, auto: true },
 name: { type: String, required: true },
 contactNo: { type: String, required: true },
 address: { type: String, required: true }
}, {
 versionKey: false
});

//compile the user schema into a model; a model is a class with which we construct documents
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/wolfpack_db');

module.exports = connection;
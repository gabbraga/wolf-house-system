//connect to the database wolfpack_db
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/wolfpack_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  module.exports = connection;
});

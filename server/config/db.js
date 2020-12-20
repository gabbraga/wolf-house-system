//connect to the database 'wolfhouse'
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/wolfhouse_dev', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  module.exports = connection;
});

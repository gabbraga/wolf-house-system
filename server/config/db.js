//connect to the database 'wolfhouse'
const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true});
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  /* module.exports = connection; */
});

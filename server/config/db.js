//connect to the database 'wolfhouse'
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true});
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  // we're connected!
  /* module.exports = connection; */
});
const db = connection.useDb('wolfhouse');

module.exports = {
  db
}
var db = require('../lib/db');

var registrationSchema = new db.Schema({
    email : {type: String, unique: false},
    publishDate: {type: Date, default: Date.now}
})

var MyRegistration = db.mongoose.model('Registration', registrationSchema);

// Exports
module.exports.addRegistration = addRegistration;


// Add user to database
function addRegistration(email, callback) {
  var instance = new MyRegistration();
  instance.email = email
  instance.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(null, instance);
    }
  });
}
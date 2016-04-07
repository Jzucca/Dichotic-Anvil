var mongoose = require('mongoose');
var crypto = require('crypto'); //bcrypt?

var LinkSchema = new mongoose.Schema({
  visits: Number,
  link: String,
  title: String,
  code: String,
  baseUrl: String,
  url: String
});


//Maybe we should use bcrypt?
var createSha = function (url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

LinkSchema.pre('save', function (next) {
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = mongoose.model('Link', LinkSchema);

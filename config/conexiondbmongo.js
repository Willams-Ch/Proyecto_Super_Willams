var mongoose = require("mongoose");
module.exports = mongoose.connect('mongodb://localhost:27017/super1', {useNewUrlParser: true});
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : {type: String, required : true, max : 99, unique : true},
	password : {type: String, required : true, max : 99},
	token : {type: String, required : false, max : 99},
	active : {type : Boolean, required : true, default : true},
	email : {type: String, required : true, max : 99},
	graphs : {}
});

module.exports = mongoose.model('user', UserSchema);

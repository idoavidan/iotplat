const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : {type: String, required : true, max : 99, unique : true},
	name : {type: String, max : 99, unique : false},
	surname : {type: String, max : 99, unique : false},
	password : {type: String, required : true, max : 99},
	token : {type: String, required : false, max : 99},
	active : {type : Boolean, required : true, default : true},
	role: {type: String, required : true, enum:['','device','user','admin']},
	email : {type: String, required : true, max : 99},
	graphs : {type: Array, required : false},
});

module.exports = mongoose.model('user', UserSchema);

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSchema = new Schema({
	device_id : {type: String, required : false, max : 99},
	sensor_id : {type: String, required : false, max : 99},
	time : {type: Number, required: true},
	timeS : {type: Number, required: true},
	data : {},
});

module.exports = mongoose.model('feed', FeedSchema);

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FeedSchema = new Schema({
	name: {type: String, required: true, max: 99},
	sensor: {type: String, required: true, max: 99},
	data : {type: Number, required: true},
	time : {type: Number, required: true},
});

module.exports = mongoose.model('feed', FeedSchema);

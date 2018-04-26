const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FeedSchema = new Schema({
    group : {type: String, required : false, max : 99},
	name: {type: String, required: true, max: 99},
	sensor: {type: String, required: true, max: 99},
	data : {type: Number, required: true},
	time : {type: Number, required: true},
});

module.exports = mongoose.model('feed', FeedSchema);

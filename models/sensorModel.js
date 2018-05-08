const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorSchema = new Schema({
    sensor_id: {type: String, required : false, max : 99, unique : true},
    description : {type: String, required : false, max : 99, unique : true},
    data : {}
});

module.exports = mongoose.model('sensor', SensorSchema);
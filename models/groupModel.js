const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    group_id : {type: String, required : true, max : 99, unique : true},
	group_name : {type: String, required : true, max : 99, unique : true},
    group_devices : [{
        device_id : {type: String, required : false, max : 99},
        device_sensors : [{
            sensor_id : {type: String, required : false, max : 99}
        }]
    }]
})

module.exports = mongoose.model('group', GroupSchema);
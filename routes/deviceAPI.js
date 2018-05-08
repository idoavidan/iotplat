var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var FeedModel = require('../models/feedModel');
var SensorModel = require('../models/sensorModel');

router.post('/registerSensor', function (req, res) {
    var sensor = new SensorModel();	
	sensor.sensor_id = req.body.sensor_id;
	sensor.description = req.body.description;
	sensor.data = req.body.data;

	sensor.save(function (err, feed) {
		if (err) {
			res.send(err._message);
		} else {
			res.json(feed._id)
		}
    });
})

router.post('/', function (req, res) {
	var instance = new FeedModel();	
	instance.time = req.body.time;
	instance.timeS = Date.now();
	instance.device_id = req.body.device_id;
	instance.sensor_id = req.body.sensor_id;
	instance.data = req.body.data;
	instance.save(function (err, feed) {
	if (err) {
		res.send(err._message);
	} else {
		res.json(feed._id)
	}
	});
})

module.exports = router;
var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

// var MyModel = require('../models/feedModel');
var FeedModel = require('../models/feedModel');

router.post('/feedsByIndex', function(req,res){
    var query = {};
	query[req.body.index] = req.body.value;	
	if(req.body.from !== req.body.to){
		query.time = {
			$gt : req.body.from, 
            $lt : req.body.to 
		}
	}
    FeedModel.find(query).then(function(x){
        res.json(x)
    });
})

var GroupModel = require('../models/groupModel');

function getGroup(group_id){
	return GroupModel.findOne({group_id : group_id},
			{_id : 0, __v : 0, "group_devices._id" : 0, "group_devices.device_sensors._id" : 0})
}

router.post('/groups', function(req,res){
	GroupModel.find().then(x => res.json(x.map(group => group.group_id)))
})

router.post('/devices', function(req,res){
	getGroup(req.body.group_id).then(x => res.json(x.group_devices))
})

router.get('/group', function(req,res){
	getGroup("house").then(x => res.json(x.group_devices))
})

// router.post('/sensors', function(req,res){
// 	const query = {group_id : req.body.group_id}
// 	// query = {"group_devices.device_id" : req.body.device_id};	
// 	GroupModel.findOne(query).then((x,err) => 
// 			res.json(x.group_devices.filter(devices => devices.device_id === req.body.device_id)))
// })


router.post('/group', function(req,res){
	var instance = new GroupModel();	
	instance.group_id = req.body.group_id;
	instance.group_devices = req.body.group_devices;
	instance.save(function (err, feed) {
	if (err) {
		res.send(err._message);
	} else {
		res.json(feed._id)
	}
	});
})


module.exports = router;
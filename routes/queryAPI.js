var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var FeedModel = require('../models/feedModel');
var db = require('../dbs/mongoDB');

router.post('/feedsByIndex', function(req,res){
    var query = {};
	query[req.body.index] = req.body.value;	
	if(req.body.from !== req.body.to){
		query.time = {
			$gt : req.body.from, 
            $lt : req.body.to 
		}
	}
    db.find(FeedModel,query,function(x){
        res.json(x)
    })
})

var GroupModel = require('../models/groupModel');

function getGroup(group_id,callback){
	db.findOne(GroupModel,{group_id : group_id},
		{_id : 0, __v : 0, "group_devices._id" : 0, "group_devices.device_sensors._id" : 0},
	callback)		
}

router.post('/groups', function(req,res){
	db.find(GroupModel,{}, x => res.json(x.map(group => group.group_id)));
})

router.post('/devices', function(req,res){
	getGroup(req.body.group_id,x => res.json(x.group_devices))

})

router.post('/group', function(req,res){
	getGroup(req.body.group_id).then(x => res.json(x))
})


router.post('/group1', function(req,res){
	var instance = new GroupModel();	
	instance.group_id = req.body.group_id;
	instance.group_devices = req.body.group_devices;
	db.save(instance,function (err, feed) {
		if (err) {
			res.send(err._message);
		} else {
			res.json(feed._id)
		}
	});
})


module.exports = router;
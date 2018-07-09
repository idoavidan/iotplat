var c = console.log.bind(console);
var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var FeedModel = require('../models/feedModel');
var db = require('../dbs/mongoDB');

function errhandle(error, data,res){
    if(error){
		res.status(500).send(error);
    } else if(data === null || data.length === 0){
		res.send({});
    } else res.json(data);
};

router.post('/feedsByIndex', function(req,res){
    var query = {};
    if (req.body.parent && req.body.parentVal){
		query[req.body.parent] = req.body.parentVal;
		query[req.body.index] = req.body.value;
		if(req.body.from !== req.body.to){
			query.timeS = {$gt : req.body.from, $lt : req.body.to};
		};
		db.find(FeedModel,query, (err,data) => errhandle(err,data,res));
	} else{
		res.status(400).send('Bad Request');
	};
});

var GroupModel = require('../models/groupModel');

router.post('/groups', function(req,res){
    db.find(GroupModel,query = {}, {_v : 0, _id : 0}, (data,err) => errhandle(err,data ,res));
});
	
router.post('/group', function(req,res){
    query = {group_id : req.body.group_id};
    exclude = {_id : 0, __v : 0, "group_devices._id" : 0, "group_devices.device_sensors._id" : 0};
    db.findOne(GroupModel,query,exclude,(data,err) => errhandle(err,data,res));		
});
	
router.post('/createGroup', function(req,res){
    var instance = new GroupModel();	
    instance.group_id = req.body.group_id;
    instance.group_devices = req.body.group_devices;
    db.save(instance, (err,data) => errhandle(err,data,res));	
});

//users
var UserModel = require('../models/userModel');
router.post('/users', function(req,res){
    exclude = {_id : 0, __v : 0, password : 0,token : 0};
    db.find(UserModel,{},exclude,(data,err) => errhandle(err,data ,res));	
});

router.post('/registerUser', function(req,res){
    var instance = new UserModel();
    instance.username = req.body.username;
    instance.password = req.body.password;
    instance.email = req.body.email;
    instance.graphs = [];
    db.save(instance, (err,data) => errhandle(err,data,res))	
});
router.post('/updateUser', function(req,res){
	var u = req.user;
	var uN = JSON.parse(req.body.user);
	Object.keys(uN).map(o=>{
		u[o]=uN[o]
	})
    db.save(u,(err,data) => errhandle(err,data,res));
});

router.post('/saveGraph', function(req,res){
    var user = req.user
    var pos = user.graphs.findIndex(o => o.name === req.body.name);
    if (pos!=-1){
        user.graphs.splice(pos,1,req.body);
    } else{
        user.graphs.push(req.body);
    };
    db.save(user, (err,data) => res.json("olay havad olay lo"))
});

router.post('/getGraph', function(req,res){
    exclude = {};
    query = {username : req.user.username};
    db.findOne(UserModel,query,exclude, (data,err) =>  errhandle(err,data.graphs,res));
});

//db.find(FeedModel,{timeS:{$lt:1529919363857}},{},(data,err) => ttt(data));
//function ttt (rec){    
//   c(rec)
//}

//FeedModel.remove({timeS:{$lt:1529919363857}} , function(err) {
//    if (!err) {
//            c('notification!')
//    }
//    else {
//            c('error');
//    }
//});
//db.remove(FeedModel,{timeS:{$lt:1529919363899}},(data,err)=>ttt(data));
//    db.findOne(GroupModel,{group_id:'fact'},{},(data,err) => ttt(data));		
//    function ttt (group){
//    group.group_devices.push({"device_id":"pi0-16","device_name":"pi0-16","device_sensors":[{"sensor_id":"am2302H"},{"sensor_id":"am2302T"}]})
//    group.group_devices.push({"device_id":"pi0-17","device_name":"pi0-17","device_sensors":[{"sensor_id":"am2302H"},{"sensor_id":"am2302T"}]})
//    group.group_devices.push({"device_id":"pi0-18","device_name":"pi0-18","device_sensors":[{"sensor_id":"am2302H"},{"sensor_id":"am2302T"}]})
//    group.group_devices.push({"device_id":"pi0-19","device_name":"pi0-19","device_sensors":[{"sensor_id":"am2302H"},{"sensor_id":"am2302T"}]})
//    db.save(group, (err,data) => c('s'))
//    }
module.exports = router;
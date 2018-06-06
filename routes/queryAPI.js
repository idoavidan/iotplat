var c = console.log.bind(console);
var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var FeedModel = require('../models/feedModel');
var db = require('../dbs/mongoDB');

function errhandle(error, data,res){
    // c('err'+error)
    // c(data)
//    c(res)
    if(error){
	// c(error);
	res.status(500).send(error);
    } else if(data === null || data.length === 0){
	// c(error);
	res.send("");
    } else res.json(data);
}

router.post('/feedsByIndex', function(req,res){
    var query = {};
	query[req.body.index] = req.body.value;	
	if(req.body.from !== req.body.to){
	    query.time = {
		$gt : req.body.from, 
		$lt : req.body.to 
	    };
	};
    db.find(FeedModel,query, (err,data) => errhandle(err,data,res));
});

var GroupModel = require('../models/groupModel');

router.post('/groups', function(req,res){
    db.find(GroupModel,query = {}, {group_id : 1, _id : 0}, (data,err) => errhandle(err,data ,res));
});
	
router.post('/group', function(req,res){
    query = {group_id : req.body.group_id};
    exclude = {_id : 0, __v : 0, "group_devices._id" : 0, "group_devices.device_sensors._id" : 0};
    db.findOne(GroupModel,query,exclude,(data,err) => errhandle(err,data,res));		
})
	
router.post('/createGroup', function(req,res){
    var instance = new GroupModel();	
    instance.group_id = req.body.group_id;
    instance.group_devices = req.body.group_devices;
    db.save(instance, (err,data) => errhandle(err,data,res));	
})

//users
var UserModel = require('../models/userModel');
router.post('/updateUser', function(req,res){
    var user = req.user;
    var update = req.body.user;
    user.set(update);
    db.save(user, (err,data) => res.json(data))
});

router.post('/saveGraph', function(req,res){
    var user = req.user
    var pos = user.graphs.findIndex(o => o.name === req.body.graph.name);
    if (pos!=-1){
        user.graphs.splice(pos,1,req.body.graph);
    } else{
        user.graphs.push(req.body.graph);
    };
    db.save(user, (err,data) => res.json("olay havad olay lo"))

});

router.post('/getGraph', function(req,res){
    exclude = {};
    query = {username : req.user.username};
    db.findOne(UserModel,query,exclude, (data,err) =>  errhandle(err,data.graphs,res));
});


module.exports = router;
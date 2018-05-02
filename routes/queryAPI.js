var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var MyModel = require('../models/feedModel');


router.post('/feedsByIndex', function(req,res){
    var query = {};
	query[req.body.index] = req.body.value;	
	if(req.body.from !== req.body.to){
		query.time = {
			$gt : req.body.from, 
            $lt : req.body.to 
		}
	}
    MyModel.find(query).then(function(x){
        res.json(x)
    });
})

//query by timeframe
router.post('/feedsByTime', function(req,res){
    var query = {
        time : { 
            $gt : req.body.from, 
            $lt : req.body.to 
        }
    };
    MyModel.find(query).then(function(x){
        res.json(x)
    })
})

router.post('/names',function(req,res){
	MyModel.distinct("name").then(function(data){
		res.send(data)
	});
})

router.post('/sensors',function(req,res){
	MyModel.distinct("sensor").then(function(data){
		res.send(data)
	});
})

router.post('/groups',function(req,res){
	MyModel.distinct("group").then(function(data){
		res.send(data)
	});
})

router.post('/general', function(req,res){
	var d=req.body.data;
	if(d.index === 'name'){
		MyModel.distinct("name").then(function(data){
			res.send(data)
		});
	} else if (d.index === 'sensor' && d.value === undefined){
		MyModel.distinct(d.index).then(function(data){
			res.send(data)
		});
	} else if (d.index === 'sensor' && d.value !== undefined){
		MyModel.distinct(d.index,{"name":d.value}).then(function(data){
			res.send(data)
		});
	}
	else {
		res.status(400);
	}
})

module.exports = router;
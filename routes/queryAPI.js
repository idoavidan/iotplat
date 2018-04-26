var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var MyModel = require('../models/feedModel');

router.post('/feedsByIndex', function(req,res){
    var query = {};
    query[req.body.index] = req.body.value;	
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


router.post('/general', function(req,res){
	if(req.body.index === 'name'){
		MyModel.distinct("name").then(function(data){
			res.send(data)
		});
	} else if (req.body.index === 'sensor' && req.body.value === undefined){
		MyModel.distinct(req.body.index).then(function(data){
			res.send(data)
		});
	} else if (req.body.index === 'sensor' && req.body.value !== undefined){
		MyModel.distinct(req.body.index,{"name":req.body.value}).then(function(data){
			res.send(data)
		});
	}
	else {
		res.status(400);
	}
})


module.exports = router;
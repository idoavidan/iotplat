var express = require('express');
var router = express.Router();
var config = require('../private/config.json');
var appData = config.appData;

var MyModel = require('../models/feedModel');

router.post('/', function (req, res) {
    var instance = new MyModel();	
		appData.reqParams.map( o => {
			instance[o]=req.body[o];
    });
    
    instance.save(function (err, feed) {
		if (err) {
			res.send(err._message);
		} else {
			res.json(feed._id)
		}
    });
})

module.exports = router;
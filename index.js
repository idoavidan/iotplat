var express = require('express')
var bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')

//git check
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 
// app.use(express.static(path.join(__dirname, 'web-client/build')));
//db connection
var config = require('./private/config.json');
const mongoose = require('mongoose');
mongoose.connect(config.conn);
var Schema = mongoose.Schema;
var FeedSchema = new Schema({
	name: {type: String, required: true, max: 99},
	sensor: {type: String, required: true, max: 99},
	data : {type: Number, required: true},
	time : {type: Number, required: true},
});
var db = mongoose.connection;
var MyModel = db.model('Feed', FeedSchema);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//main app page
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/'+req.path);
});

//device data listener
var appData = {"reqParams":["name","sensor","data","time"],"port":8000};
app.post('/feed', function (req, res) {
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
//query by Index
app.post('/feedsByIndex', function(req,res){
    var query = {};
    query[req.body.index] = req.body.value;	
    MyModel.find(query).then(function(x){
        res.json(x)
    });
})
//query by timeframe
app.post('/feedsByTime', function(req,res){
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

app.post('/general', function(req,res){
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
// app.get('/', function(req,res){
//     res.send("wowooooooooo")
// })

// app.post('/getAllReport', function(req,res){
    // MyModel.find().then(function(x){
    //     let naw = [{}];
    //     var i = 0;
    //     x.forEach(function(y){
    //         naw[i] = { Status : y._status , 
    //                    Category : y.category , 
    //                    Description : y.desc,
    //                    Name : y.name,  
    //                    Email : y.email,
    //                    Date : y._dateTime,
    //                    Latitude : y.y,
    //                    Longitude : y.x,
    //         }
    //         i = i + 1;
    //     })
    //     return naw;
    // }).then(x => res.json(x));
// })

// app.post('/getReport', function(req,res){
//     MyModel.findById(req.body.id).then(x => res.json(x));
// })


var server = app.listen(process.env.PORT ? process.env.PORT : appData.port, function () {
	console.log('Example app listening on port '+ (process.env.PORT ? process.env.PORT : appData.port));
})
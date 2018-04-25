var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');


//git check
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 
// app.use(express.static(path.join(__dirname, 'web-client/build')));

mongoose.connect('mongodb://Admin:Admin@env-shard-00-00-1z8ev.mongodb.net:27017,env-shard-00-01-1z8ev.mongodb.net:27017,env-shard-00-02-1z8ev.mongodb.net:27017/iotplat?ssl=true&replicaSet=Env-shard-0&authSource=admin');

var Schema = mongoose.Schema;

var FeedSchema = new Schema(
    {
        name: {type: String, required: true, max: 99},
        sensor: {type: String, required: true, max: 99},
        data : {type: Number, required: true},
        time : {type: Number, required: true},
    }
);

var db = mongoose.connection;

var MyModel = db.model('Feed', FeedSchema);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/feed', function (req, res) {

    var instance = new MyModel();
    instance.name = req.body.name;
    instance.sensor = req.body.sensor;
    instance.data = req.body.data;
    instance.time = req.body.time;
    
    instance.save(function (err, feed) {
        res.json(feed._id)        
    });
    // res.send('Hello World!')
})

app.post('/feedsByIndex', function(req,res){
    var query = {};
    query[req.body.index] = req.body.value;
    MyModel.find(query).then(function(x){
        res.json(x)
    })
})

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!')
})
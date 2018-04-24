var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');


//git check
var app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'web-client/build')));

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

// app.get('/', function(req,res){
//     res.send("wowooooooooo")
// })

// app.post('/getAllReport', function(req,res){
//     MyModel.find().then(function(x){
//         let naw = [{}];
//         var i = 0;
//         x.forEach(function(y){
//             naw[i] = { Status : y._status , 
//                        Category : y.category , 
//                        Description : y.desc,
//                        Name : y.name,  
//                        Email : y.email,
//                        Date : y._dateTime,
//                        Latitude : y.y,
//                        Longitude : y.x,
//             }
//             i = i + 1;
//         })
//         return naw;
//     }).then(x => res.json(x));
// })

// app.post('/getReport', function(req,res){
//     MyModel.findById(req.body.id).then(x => res.json(x));
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(process.env.PORT || 8000, function () {
  console.log('Example app listening on port 8000!')
})
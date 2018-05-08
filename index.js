var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
var config = require('./private/config.json');

//git check
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 


//auth 
app.use((req,res,next) => next());

//db connection

mongoose.connect(config.conn);
var db = mongoose.connection;

// var MyModel = require('./models/feedModel');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//main app page

//device data listener
var appData = config.appData;
var devices = require('./routes/deviceAPI');
app.use('/feed', devices);
// TODO mqtt feed

//query by Index
var devices = require('./routes/queryAPI');
app.use('/query', devices);
//TODO websocket query
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/'+req.path);
});

var server = app.listen(process.env.PORT ? process.env.PORT : appData.port, function () {
    console.log('Example app listening on port '+ (process.env.PORT ? process.env.PORT : appData.port));
})
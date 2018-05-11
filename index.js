var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
var config = require('./private/config.json');

//git check
var app = express()
var http = require('http').Server(app);

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

var devices = require('./routes/deviceAPI');
app.use('/feed', devices);
// TODO mqtt feed
var appData = config.appData;

//query by Index


app.get('/ws', (req, res) => {
    res.sendFile(__dirname+'/public/s.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});


var server = http.listen(process.env.PORT ? process.env.PORT : appData.port, function () {
    console.log('Example app listening on port '+ (process.env.PORT ? process.env.PORT : appData.port));
})

//websocket query
var io = require('socket.io')(server);
var ws = require('./routes/wsAPI')(io,app);
app.set('socketIo', io);

var devices = require('./routes/queryAPI');
app.use('/query', devices);


app.get('*', (req, res) => {
    app.on("hello", (client) => console.log("wo"))
    res.sendFile(__dirname+'/public/'+req.path);
});

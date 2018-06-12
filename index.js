var c = console.log.bind(console);
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
var db = require('./dbs/mongoDB');

var config = require('./private/config.json');
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
//git check
var app = express()
var http = require('http').Server(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

//moongose connection

mongoose.connect(config.conn);
var mongooseConnection = mongoose.connection;
mongooseConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));


//auth 
var UserModel = require('./models/userModel');

passport.use(new Strategy(
    function(token1, cb) {
        db.findOne(UserModel,{token : token1}, {password : 0},  function(user, err) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
        return cb(null, user);
    });
}));

app.post('/login',
    function(req, res, next) {
        db.update(UserModel,{
	    username : req.body.username,
	    password : req.body.password}, { __v : 0, password : 0}, 
        function(err, user) {
            if (err) { return res.json("err"); }
            if (!user) { return res.json("no user"); }
            user.token = uidgen.generateSync();
            db.save(user, (err,user) => res.json({'user':user}))
        });
    }
);

var appData = config.appData;

app.get('/ws', (req, res) => {
    res.sendFile(__dirname+'/public/s.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});
app.get('*', (req, res) => {
//    app.on("hello", (client) => console.log("wo"))
    res.sendFile(__dirname+'/public/'+req.path);
});
app.use(passport.authenticate('bearer', { session: false }),(req,res,next) => next());


//device data listener
var devices = require('./routes/deviceAPI');
app.use('/feed', devices);
// TODO mqtt feed
//query by Index
var server = http.listen(process.env.PORT ? process.env.PORT : appData.port, function () {
    c('Example app listening on port '+ (process.env.PORT ? process.env.PORT : appData.port));
});

//websocket query
var io = require('socket.io')(server);
var ws = require('./routes/wsAPI')(io,app);
app.set('socketIo', io);

var devices = require('./routes/queryAPI');
app.use('/query', devices);

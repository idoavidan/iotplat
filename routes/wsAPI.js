module.exports = function(io,app)
{
    io.on('connection', (client) => {
      // console.log("wow")      
    })
    
    app.on('pushFeed', (data) => {
      io.sockets.emit('feed', data);
    });
}
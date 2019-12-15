var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  setInterval(function () {
    console.log('socket');
    socket.emit('xyz', Math.random() * 10);
}, 5000)
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
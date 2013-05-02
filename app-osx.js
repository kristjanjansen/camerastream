var fs = require('fs');

var tako = require('tako')
var camera = require('camera').createStream();

var app = tako()
app.route('/').file(__dirname + '/client/index.html');
app.route('/*').files(__dirname + '/client');
app.httpServer.listen(8000)

app.sockets.on('connection', function (socket) {  
    camera.on('data', function(buffer){
      app.sockets.emit('frames', { frame: "data:image/png;base64," + buffer.toString('base64')});
    });  
})


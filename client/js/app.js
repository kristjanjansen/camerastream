var socket = io.connect();

socket.on('frames', function (data) {
  $('#frame').attr('src', data.frame)
});

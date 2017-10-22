    var socket = io();

    socket.on('connect',function() {
      console.log('Connected to server');

    socket.emit('createMessage', {
    to: 'kamal@example.com',
    text: 'Hey. This is kamal.'
  });
    });

    socket.on('disconnect', function() {
      console.log('Disconnected from server');
    });

    socket.on('newMessage',function(message){
      console.log("newMessage",message);
    })

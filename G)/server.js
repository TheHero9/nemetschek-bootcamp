const WebSocket = require('ws');


const server = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server started');

server.on('connection', (socket) => {
  console.log('Client connected');


  // Transfer orders
  socket.on('message', (message) => {


    // Echo the message back to the client
    console.log(message)
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
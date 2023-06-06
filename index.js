const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

msg ="aaa";

io.on('connection', function(socket) {
  socket.on("id",data =>{
    socketId=data;
    socket.on("html",sata=>{
      html=sata

      io.to(socketId).emit("apache",html);
      

      console.log(socket.id);
  
   
      
  
    });
   
 
  });    
});




server.listen(3000,()=>{
console.log("server listening => 3000 :)");
});
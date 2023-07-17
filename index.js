const express = require("express");
const socketio = require("socket.io");
const app = express();
var http = require("http");
var url = require("url");
var fullurl = "";
app.use(express.static(__dirname));

var server = http.createServer(app).listen(3000);

const io = socketio(server);
var people = 0;
var roomnumber = 1;
io.on("connection", (socket) => {
	socket.emit("url");

		people++;
	console.log(people);
		socket.join("Game " + roomnumber);
	console.log(Array.from(socket.rooms)[1]);
		if(people % 3 === 0 && people > 0){
		io.to("Game " + roomnumber).emit("gamestart");
		roomnumber++;
	}

		
		socket.on('disconnecting', ()=> {
			if(people > 0){
				people--;
				console.log(people);

				if(people % 3 === 0){
					roomnumber--;
				}
				console.log(Array.from(socket.rooms)[1]);
			}
		});
	
	socket.on("username", user => {
		socket.nickname = user;
		socket.emit("person", user);
	});
	socket.on("won", (user)=> {
		socket.emit("youwon");
		socket.broadcast.to(Array.from(socket.rooms)[1]).emit("winner", user);
	})
});
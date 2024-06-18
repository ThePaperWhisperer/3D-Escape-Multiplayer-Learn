const express = require("express");
const socketio = require("socket.io");
const app = express();
var http = require("http");
var place = 1;
app.use(express.static(__dirname));
var rooms = [];
var server = http.createServer(app).listen(3000, ()=> {
	console.log("I am listening at 3000!")
});
var hosts = [];
const io = socketio(server);
io.on("connection", (socket) => {
	socket.on("joinroom", (r)=> {
		if(rooms.includes(r)){
			socket.join(r);
			hosts.find(h=> h.room === r).host.emit("check");
		}
	})
	socket.on("ready", ()=> {
		socket.to(hosts.find(h=> h.host === socket).room).emit("gamestart");
	})
	socket.on("room", (r)=> {
rooms.push(r);
		hosts.push({host: socket, room: r})
	})
	socket.emit("url");

	
		
		socket.on('disconnecting', ()=> {
			
				console.log(Array.from(socket.rooms)[1]);
		});
	
	socket.on("username", user => {
		socket.nickname = user;
		socket.emit("person", user);
	});
	socket.on("won", (user)=> {
		if(place === 1){
			socket.emit("youwon");

			socket.broadcast.to(Array.from(socket.rooms)[1]).emit("winner", user);
		}
		if(place === 2){
			socket.emit("yousec");

			socket.broadcast.to(Array.from(socket.rooms)[1]).emit("second", user);
		}
		if(place === 3){
			socket.emit("youthird");

			socket.broadcast.to(Array.from(socket.rooms)[1]).emit("third", user);
		}
		place++;
	})
});
const db = window.indexedDB.open("users", 4);
var list;

if ("service-worker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}
if(sessionStorage.getItem("verif") === null){
	sessionStorage.setItem("verif", "")
}
 var socket = io.connect("https://threed-escape-multiplayer.onrender.com/");
var starttime;
var endtime;
socket.on("url",()=> {
	if(location.href === "https://threed-escape-multiplayer.onrender.com/"){
		socket.emit("correctstart");
	}
});
db.onsuccess = (e)=>{
if(location.href === "https://threed-escape-multiplayer.onrender.com/"){
	var username = prompt("Choose an username.");
		socket.emit("username", username);
		 transaction = e.target.result.transaction("usernames", "readwrite");
			 list = transaction.objectStore('usernames')
			list.add({username: username});

}
}
socket.on("gamestart", ()=> {
	if(location.href === "https://threed-escape-multiplayer.onrender.com/"){
	game = true;
	starttime = Date.now();
	console.log(starttime);
	alert("Beat all the levels the fastest to win. Game starting...");
	}
});

function add1(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "1");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}
function add2(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "2");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}
function add3(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "3");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}
function add4(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "4");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}
function add5(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "5");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}
function add6(){
	sessionStorage.setItem("verif", sessionStorage.getItem("verif") + "6");
	if(sessionStorage.getItem("verif").includes("1") && sessionStorage.getItem("verif").includes("2")&& sessionStorage.getItem("verif").includes("3") && sessionStorage.getItem("verif").includes("4") && sessionStorage.getItem("verif").includes("5") && sessionStorage.getItem("verif").includes("6")){
	socket.emit("won", sessionStorage.getItem("username"));
}
}

socket.on("youwon", ()=> {
	alert("Congrats! You won. Have a nice day!");
	window.close();
});
socket.on("winner", user => {
	alert(user + " won! Better luck next time. Have a nice day!");
	window.close();
})
socket.on("person", username => {
	sessionStorage.setItem("username", username);
})

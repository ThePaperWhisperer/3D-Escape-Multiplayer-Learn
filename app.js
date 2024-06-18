var list;

if ("service-worker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}
if(sessionStorage.getItem("verif") === null){
	sessionStorage.setItem("verif", "")
}
 var socket = io.connect("https://threed-escape-multiplayer-learn.onrender.com/learn.html");
var starttime;
var endtime;

socket.on("url",()=> {
	if(location.href === "https://threed-escape-multiplayer-learn.onrender.com/learn.html"){
		socket.emit("correctstart");
	}
});

if(location.href === "https://threed-escape-multiplayer-learn.onrender.com/learn.html"){
	var username = prompt("Choose an username.");
		socket.emit("username", username);
	

}
socket.on("gamestart", ()=> {
	if(location.href === "https://threed-escape-multiplayer-learn.onrender.com/learn.html"){
	game = true;
	starttime = Date.now();
	console.log(starttime);
	alert("Beat all the levels the fastest to place. The first four levels have questions to answer in order to move to the next level. Game starting...");
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
	alert("Congrats! You got first. Have a nice day!");
});
socket.on("yousec", ()=> {
	alert("Congrats! You got second. Have a nice day!");
});
socket.on("youthird", ()=> {
	alert("Congrats! You got third. Have a nice day!");
});
socket.on("winner", user => {
	alert(user + " got first place! ");
})
socket.on("second", (user)=> {
	alert(user + " got second place! ");
})
socket.on("third", (user)=> {
	alert(user + " got third place!");
})
socket.on("person", username => {
	sessionStorage.setItem("username", username);
})

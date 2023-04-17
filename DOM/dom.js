function timxc(){
let data = new Date();
let min = data.getMinutes();
let sec = data.getSeconds();
let hou = data.getHours();
const clock = document.getElementById("clock");
clock.innerText = `${hou}:${min}:${sec}`;
}
setInterval(timxc, 1000);

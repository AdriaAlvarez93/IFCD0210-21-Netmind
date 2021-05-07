window.onload=actions;
window.onresize=resize;
var x;
function actions(){
	document.querySelector("#rar").onclick=followw;
	x=document.querySelector("#map").innerWidth;
	let alto=document.querySelector("#logo").offsetHeight;
	document.querySelector("#navItems").style.height=alto+"px";
	resize();
}
function resize(){
	let anchoNavegador=window.innerWidth;
	let anchoCaja=1200-anchoNavegador;
	let growth=anchoCaja/anchoNavegador*110;
	anchoCaja=growth+300;
	document.querySelector("#map").style.height=anchoCaja+"px";
}
function followw(){
	if (document.querySelector("#rar").innerHTML=="FOLLOW") {
	document.querySelector("#rar").innerHTML="UNFOLLOW";
	document.querySelector("#rar").style="background:#E0DBE3;color:#212322";
	aquaint();
	} else{
		document.querySelector("#rar").innerHTML="FOLLOW";
	document.querySelector("#rar").style=null;
	erase();
	}
}
function aquaint(){
	document.querySelector("#followingBox").innerHTML=`<button id="strech">ASK TO AQUAINT?</button>`;
}
function erase(){
	document.querySelector("#followingBox").innerHTML=``;
}
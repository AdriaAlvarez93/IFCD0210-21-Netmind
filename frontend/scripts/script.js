window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("header").offsetHeight;
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();

    document.querySelector("#friday").onscroll = myFunction;

    var colorz = ["#882C45","#902E85","#6154AA","#0079A5","#008C7A","#008F29","#808800","#BF7700","#E46081","#E35BD3","#9785FF","#00B1ED","#00C2A9","#00BE29","#A1AC00","#EB8E00","#FF6494"];

    color = colorz.sort(() => Math.random() - 0.5);


    for (let i = 0; i < color.length; i++) {
        document.querySelectorAll(".planBox")[i].style.outline = `1px solid ${color[i]}`;
        document.querySelectorAll(".planInfo")[i].style.backgroundColor = color[i];
    }
}
function actions2() {
    document.querySelector("main").style.height = window.innerHeight - 48 - 40 + "px";
}

function actions3() {
    var x = document.querySelectorAll(".planContent")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function actions4() {
    var x = document.querySelectorAll(".planContent")[1];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function actions5() {
    var x = document.querySelector("#burgerDropdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
  if (document.querySelector("#friday").scrollTop > 0) {
    document.querySelector("#friday2").className = "slideUp";
    
}else{
    document.querySelectorAll(".slideUp")[0].className = "days";
}
}
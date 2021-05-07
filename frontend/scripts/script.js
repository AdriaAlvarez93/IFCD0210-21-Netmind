window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("header").offsetHeight;
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();

    document.querySelectorAll(".calDay")[3].onscroll = myFunction;
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
  if (document.querySelectorAll(".calDay")[3].scrollTop > 0) {
    document.querySelectorAll(".days")[3].className = "slideUp";
    
}else{
    document.querySelectorAll(".slideUp")[0].className = "days";
}
}
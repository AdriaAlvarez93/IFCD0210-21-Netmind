window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("header").offsetHeight;
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();

    document.querySelector("#friday").onscroll = myFunction;

    var colorz = ["#d57629",
    "#c37c29",
    "#e3a835",
    "#b78c1f",
    "#9fb744",
    "#4fb231",
    "#33822a",
    "#25c76d",
    "#5281e8",
    "#9067eb",
    "#8557bd",
    "#d255b5"]

    color = colorz.sort(() => Math.random() - 0.5);


    for (let i = 0; i < color.length; i++) {
        document.querySelectorAll(".planBox")[i].style.outline = `solid 1px ${color[i]}`;
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

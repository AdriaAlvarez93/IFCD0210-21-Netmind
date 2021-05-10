window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("header").offsetHeight;
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();

    document.querySelectorAll(".calDay")[3].onscroll = myFunction;

    var colorz = ["#9C0241","#9B292B","#983C05","#954A00","#905700","#8A6200","#836C00","#7B7400","#727C0E","#6A8332","#618947","#509050","#33975C","#009D6B","#00A37C","#00A88F","#00ACA3","#00AFB7","#00B0CB","#00AFDF","#00ABF2","#00A5FF","#599BFF","#948DFF","#C17CFF","#E666FF","#FF4BFF","#FF2AFF","#FF00F3","#FF00D8","#FF00B7","#FF178B"];

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
  if (document.querySelectorAll(".calDay")[3].scrollTop > 0) {
    document.querySelectorAll(".days")[3].className = "slideUp";
    
}else{
    document.querySelectorAll(".slideUp")[0].className = "days";
}
}
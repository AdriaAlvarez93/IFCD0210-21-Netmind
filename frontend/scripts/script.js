window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("header").offsetHeight;
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();

    document.querySelector("#friday").onscroll = myFunction;

    var colorz = ["#826c33",
    "#6753bb",
    "#569c30",
    "#ad5ac2",
    "#958e26",
    "#6981e3",
    "#d46e31",
    "#548fc9",
    "#c64b37",
    "#3f9d65",
    "#996dad",
    "#3d6b31",
    "#525c99",
    "#ba802f",
    "#3c9a93",
    "#a66144",
    "#7c944f"];

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

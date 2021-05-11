window.onload = actions;
window.onresize = actions2;

function actions() {

    let alto = document.querySelector("#logo").offsetHeight;
    document.querySelector("header").style.height = alto + "px";
    document.querySelector("#moreDropdown").style.top = alto + "px";
    actions2();
    
}
function actions2() {

    document.querySelector("main").style.height = window.innerHeight - Number(document.querySelector("header").offsetHeight) - Number(document.querySelector("nav").offsetHeight) + "px";

    document.querySelectorAll(".planMedia")[0].style.height = window.innerHeight - Number(document.querySelector("header").offsetHeight) - Number(document.querySelector("nav").offsetHeight) - Number(document.querySelector("#information").offsetHeight) + "px";
}

function actions3() {
    var x = document.querySelector("#monsta");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
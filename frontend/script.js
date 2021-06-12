/* ********** Menu  ******* */

// Creando una funcion anonima autoejecutable, que se ejecuta inmediatamente al inicio de la pagina

((d) => {
    const btnMenu=d.querySelector(".menu-btn"),
    menu=d.querySelector(".menu");
    /* usamos el toogle para cambiar de svg 
     */
    btnMenu.addEventListener("click", (e) => {
        btnMenu.firstElementChild.classList.toggle("none");
        btnMenu.lastElementChild.classList.toggle("none");
        menu.classList.toggle("is-active");

    });
    /* Usamos el metodo Matches() que comprueba si nuestro elemento es seleccionable.
    https://developer.mozilla.org/es/docs/Web/API/Element/matches
    */

    d.addEventListener("click",(e) => {
        if(!e.target.matches(".menu a")) return false;
        btnMenu.firstElementChild.classList.remove("none");
        btnMenu.lastElementChild.classList.add("none");
        menu.classList.remove("is-active");
    })



})

(document);
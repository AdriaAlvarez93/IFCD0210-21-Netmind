document.addEventListener("DOMContentLoaded", () => {
    
    const span = document.querySelectorAll(".error")
    //console.log(span);
    const form = document.querySelector("form")
    // console.log(form) 
    // Indicamos las expresiones regulares aquí:
    const re_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const re_cp = /^[0-9]{3,5}$/
    const re_tlf = /^[0-9]{9}$/

    // recogida campos 
    const email = document.querySelector("input[type=email]")
    // console.log(email.value)
    
    form.addEventListener('submit', (e) => {
        
    
    /*************************************************** */
    /******* NOM **************/
    /*************************************************** */

    /** Declaramos la variable 'nom' contenedora de la caja INPUT con id="nom" */
    let nom = document.getElementById("Nom");

    /** Declaramos la variable 'errornom' contenedora de la caja SPAN de clase ".errornom" */
    // let errornom = document.querySelector(".errornom");

    /***** Evalua si está informado el campo NOM *****/     
        if (nom.value == ""){
            span[0].innerHTML = "Rellena el campo nombre";
            nom.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } else {
            nom.classList.remove("invalid");
            span[0].innerHTML="";
        }
    /*************************************************** */
    /******* COGNOM **************/
    /*************************************************** */

    /** Declaramos la variable 'nom' contenedora de la caja INPUT con id="nom" */
    let cognom = document.getElementById("Ape");

    /** Declaramos la variable 'errornom' contenedora de la caja SPAN de clase ".errornom" */
    // let errornom = document.querySelector(".errornom");

    /***** Evalua si está informado el campo NOM *****/     
        if (cognom.value == ""){
            span[1].innerHTML = "Rellena el campo apellido";
            cognom.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } else {
            cognom.classList.remove("invalid");
            span[1].innerHTML="";
        }
    /*************************************************** */
    /******* CÓDIGO POSTAL **************/
    /*************************************************** */

    /** Declaramos la variable 'nom' contenedora de la caja INPUT con id="nom" */
    let cp = document.getElementById("Cod");

    /** Declaramos la variable 'errornom' contenedora de la caja SPAN de clase ".errornom" */
    // let errornom = document.querySelector(".errornom");

    /***** Evalua si está informado el campo NOM *****/     
        if (cp.value == ""){
            span[2].innerHTML = "Rellena el campo código postal";
            cp.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } // formato incorrecto? 
        else if (!re_cp.test(cp.value)){
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[2].textContent = "El código postal tiene un formato incorrecto"
            cp.classList.add("invalid")
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        }
        else {
            cp.classList.remove("invalid");
            span[2].innerHTML="";    
        }
    /*************************************************** */
    /******* TELÉFONO **************/
    /*************************************************** */

    /** Declaramos la variable 'nom' contenedora de la caja INPUT con id="nom" */
    let tlf = document.getElementById("Tfn");

    /** Declaramos la variable 'errornom' contenedora de la caja SPAN de clase ".errornom" */
    // let errornom = document.querySelector(".errornom");

    /***** Evalua si está informado el campo NOM *****/     
        if (tlf.value == ""){
            span[3].innerHTML = "Rellena el campo teléfono";
            tlf.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } else if (!re_tlf.test(tlf.value)){
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[3].textContent = "El teléfono tiene un formato incorrecto"
            tlf.classList.add("invalid")
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } else {
            tlf.classList.remove("invalid");
            span[3].innerHTML="";    
        }

    /*************************************************** */
    /******* EMAIL **************/
    /*************************************************** */
        
        // control de relleno correctamente del campo Email
        // campo email vacio? 
        if (email.value.length === 0) {
            span[4].textContent = "Rellena el campo email"
            email.classList.add("invalid")
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } // formato incorrecto? 
        else if (!re_email.test(email.value)){
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[4].textContent = "El email tiene un formato incorrecto"
            email.classList.add("invalid")
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
        } else {
            email.classList.remove("invalid")
            span[4].textContent = ""
        }
        
            
    })

        // Controla mientras se escribe
        email.addEventListener('keyup', () => {
            
            if (email.value.length != 0 && !re_email.test(email.value)) {
                email.classList.add("invalid")
                span[4].textContent = "El email tiene un formato incorrecto"
            }else  {
                    email.classList.remove("invalid")
                    span[4].textContent = ""
                
                }

                
    })
    


    
})

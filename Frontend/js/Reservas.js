document.addEventListener("DOMContentLoaded", () => {
    
    const span = document.querySelectorAll(".error")
    //console.log(span);
    const form = document.querySelector("form")
    // console.log(form) 
    // Indicamos las expresiones regulares aquí:
    
   
    const re_tlf = /^[0-9]{9}$/

    // recogida campos 
    // const email = document.querySelector("input[type=email]")
    // console.log(email.value)
    
    form.addEventListener('submit', (e) => {
        
    
    /*************************************************** */
    /******* NUSUARIO **************/
    /*************************************************** */

    /** Declaramos la variable 'idusuario' contenedora de la caja INPUT con id="IDUsuario" */
    let idusuario = document.getElementById("IDUsuario");

        /***** Evalua si está informado el campo NUSUARIO *****/     
        if (idusuario.value == ""){
            span[0].innerHTML = "Rellena el campo usuario";
            idusuario.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor
            return  
        } else {
            idusuario.classList.remove("invalid");
            span[0].innerHTML="";
        }

       
    /*************************************************** */
    /******* TELÉFONO **************/
    /*************************************************** */

    /** Declaramos la variable 'tlf' contenedora de la caja INPUT con id="Tfn" */
    let tlf = document.getElementById("Tfn");

    /***** Evalua si está informado el campo TELÉFONO *****/     
        if (tlf.value == ""){
            span[1].innerHTML = "Rellena el campo teléfono";
            tlf.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor 
            return  
        } else if (!re_tlf.test(tlf.value)){
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[1].textContent = "El teléfono es incorrecto"
            tlf.classList.add("invalid")
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor 
            return  
        } else {
            tlf.classList.remove("invalid");
            span[1].innerHTML="";    
        }
// Controla mientras se escribe
        tlf.addEventListener('keyup', () => {
            
            if (tlf.value.length != 0) {
                tlf.classList.add("invalid")
                span[1].textContent = "El teléfono es incorrecto" 
                return   
            }else  {
                tlf.classList.remove("invalid")
                span[1].textContent = ""
                
                }
        
            
    })

        /*************************************************** */
        /******* FECHA **************/
        /*************************************************** */

        /** Declaramos la variable 'fecha' contenedora de la caja INPUT con id="Fecha" */
        let dia = document.getElementById("fecha");

        /***** Evalua si está informado el campo FECHA *****/     
        if (fecha.value == ""){
            span[2].innerHTML = "Rellena el campo FECHA";
            dia.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor   
            return
        } else {
            fecha.classList.remove("invalid");
            span[2].innerHTML="";
        }    

        /*************************************************** */
        /*******  HORA **************/
        /*************************************************** */

        /** Declaramos la variable 'hora' contenedora de la caja INPUT con id="hora" */
        let hora = document.getElementById("hora");

        /***** Evalua si está informado el campo HORA *****/     
        if (hora.value == ""){
            span[3].innerHTML = "Rellena el campo HORA";
            hora.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor 
            return  
        } else {
            hora.classList.remove("invalid");
            span[3].innerHTML="";
        }    

        /*************************************************** */
        /*******  AADD **************/
        /*************************************************** */

        /** Declaramos la variable 'aadd' contenedora de la caja SELECT con id="ops" */
        let aadd = document.getElementById("ops");

        /***** Evalua si está informado el campo AADD *****/     
        if (ops.value == "[Selecciona]"){
            span[4].innerHTML = "Rellena el campo AADD";
            ops.classList.add("invalid");
            e.preventDefault(); // cancela el envío de datos o refresco del navegador al sevidor
            return   
        } else {
            ops.classList.remove("invalid");
            span[4].innerHTML="";
        }
        
        
                
    })
    

    
})

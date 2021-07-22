document.addEventListener("DOMContentLoaded", () => {

    const span = document.querySelectorAll(".error")
    //console.log(span);
    const form = document.querySelector("form")
    // console.log(form) 
    // expresiones regulares 
    const re_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const re_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    // recogida campos 
    const email = document.querySelector("input[type=email]")
    const pass = document.querySelector("input[type=password]")
    // console.log(email.value)

    form.addEventListener('submit', (e) => {

        e.preventDefault() // para el submit
        // VALIDACION  
        // EMAIL 
        // campo email vacio? 
        if (email.value.length === 0) {
            span[0].textContent = "Rellena el campo email"
            email.classList.add("invalid")
        } // formato incorrecto? 
        else if (!re_email.test(email.value)){
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[0].textContent = "El email tiene un formato incorrecto"
            email.classList.add("invalid")
        } else {
            email.classList.remove("invalid")
            span[0].textContent = ""
        }
        // PASS 
        // campo email vacio? 
        if (pass.value.length === 0) {
            span[1].textContent = "Rellena el campo contraseña"
            pass.classList.add("invalid")
        } // formato incorrecto? 
        else if (!re_pass.test(pass.value)) {
            // el método "test" evaluar mediante una Expresión Regular si se cumple o no devolviendo un "true" o "false" respectivamente
            span[1].textContent = "La contraseña tiene un formato incorrecto"
            pass.classList.add("invalid")
        } else {
            pass.classList.remove("invalid")
            span[1].textContent = ""
        }
    
    })

    // KEYUP's 
    // EMAIL 
    email.addEventListener('keyup', () => {
        if (re_email.test(email.value)) {
            email.classList.remove("invalid")
            span[0].textContent = ""
        }
    })
    // PASS 
    pass.addEventListener('keyup', () => {
        if (re_pass.test(pass.value)) {
            pass.classList.remove("invalid")
            span[1].textContent = ""
        }
    })

})
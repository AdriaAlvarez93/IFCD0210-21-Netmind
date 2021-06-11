document.addEventListener("DOMContentLoaded", function(event) {
    
    const btn = document.querySelector("#btn")
    const nombre = document.querySelector("#nombre")
    const apellido = document.querySelector('#apellido')
    const email = document.querySelector('#correo')
    const pass = document.querySelector('#contraseña')
    const repass = document.querySelector('#recontraseña')

  

    
    const error = document.querySelectorAll('.error')

 btn.addEventListener('click', (e)=>{

    e.preventDefault()
      
    //validacion nombre y apellido -----------------------------------------------------------------------------
        if (nombre.value.length === 0){
            error[0].textContent = 'Coloca tu nombre'
            nombre.classList.add('invalid')
         
        } else {
            error[0].textContent = ''
            nombre.classList.remove('invalid')
        }


        if (apellido.value.length === 0){
           error[1].textContent = 'Coloca tu apellido'
            apellido.classList.add('invalid')
         
        } else {
            error[1].textContent = ''
            apellido.classList.remove('invalid')
        }

    // validacion email------------------------------------------------------------------------------------------------
     const re_email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    

     if (email.value.length === 0) { 
        email.classList.add("invalid")
        error[2].textContent = "Coloca  tu correo "
    } else if (!re_email.test(email.value)) { 
        email.classList.add("invalid")
        error[2].textContent = "Formato incorrecto"
    } else {
        email.classList.remove("invalid")
        error[2].textContent = ""
    }


    // Validacion contraseña--------------------------------------------------------------------------------------------
 
    if (pass.value.length === 0) {
        error[3].textContent = "Pon tu Contraseña"
         pass.classList.add("invalid")
      } else {
        pass.classList.remove("invalid")
        error[3].textContent = ""
      }
    
    
   // validacion repass ----------------------------------------------------------------------------------------------------

    if (repass.value.length === 0 ){
        error[4].textContent = "Pon de nuevo Contraseña"
         repass.classList.add("invalid")
    }else  if (repass.value != pass.value) {
        error[4].textContent = "Error Repite  Contraseña"
         repass.classList.add("invalid")
    } else {
        error[4].textContent = ""
        repass.classList.remove("invalid")
    }


    
    })



 //KEY UP ----------------------------------------------------------------------------------------------------------------------

    nombre.addEventListener("keyup", () => {
        if (nombre.validity.valid) {
            nombre.classList.remove("invalid")
          error[0].textContent = ""
        }
      });


      apellido.addEventListener("keyup", () => {
        if (apellido.validity.valid) {
            apellido.classList.remove("invalid")
          error[1].textContent = ""
        }
      });

 //-----------------------------------------------------------------------------------------------------------------------------------------

        email.addEventListener("keyup", () => {
        if (email.validity.valid) {
            email.classList.remove("invalid")
          error[2].textContent = ""
        }
      });



//--------------------------------------------------------------------------------------------------------------------------------------------      

pass.addEventListener("keyup", () => {
    if (pass.validity.valid) {
        pass.classList.remove("invalid")
      error[3].textContent = ""
    }
  });



  repass.addEventListener("keyup", () => {
    if (repass.validity.valid) {
        repass.classList.remove("invalid")
      error[4].textContent = ""
    }
  });




  });
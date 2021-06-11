document.addEventListener("DOMContentLoaded", () => {
  const enviar_btn = document.querySelector("input[type=submit]");

  //console.log(enviar_btn);
  //llamado
  const span = document.getElementsByClassName("error");
  const email = document.querySelector("#mail");
  const pass = document.querySelector("#contraseña");

  //CLICK INGRESAR
  enviar_btn.addEventListener("click", (e) => {
    e.preventDefault() //no se carga la pagina a cada momento

    //console.log(email);

    //----------email-------------------//

    if (email.value.length === 0) {
      span[0].textContent = "Rellena el campo email"
      email.classList.add("invalid")
    }

    if (!email.validity.valid) {
      span[0].textContent = "El email tiene un formato incorrecto"
    }
  
  //---------------password---------------------//
  if (pass.value.length === 0) {
    span[1].textContent = "Pon tu Contraseña"
     pass.classList.add("invalid")
  }

  if (!pass.validity.valid) {
    span[1].textContent = "la contraseña tiene formato incorrecto"
  }
});

  //keyup mail------------------------------------------

  email.addEventListener("keyup", () => {
    if (email.validity.valid) {
      email.classList.remove("invalid")
      span[0].textContent = ""
    }
  });


  //keyup pass---------------------------------------------
  
  pass.addEventListener('keyup', () =>{
      if(pass.validity.valid){
          pass.classList.remove("invalid")
          span[1],textContent = ""
      }
  })

});

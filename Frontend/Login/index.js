const btnA = document.querySelector('#btnA')
const btnR = document.querySelector('#btnR')
const nombreA = document.querySelector('#emailA')
const contrA = document.querySelector('#contrA')
const error = document.querySelectorAll('span')

btnA.addEventListener('click', (e) => { 
    e.preventDefault()
   if (nombreA.value == '') {
      error[0].textContent = 'Rellena el campo nombre'  
   }else if (contrA.value == '') {
    error[1].textContent = 'Rellena el campo contraseña' 
   }else {
    error[1].textContent = '' 
    error[0].textContent = '' 

   }
   
})

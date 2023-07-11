function validarEdad() {
    let edad = prompt("Ingresa tu edad:");
          
    if (!isNaN(parseInt(edad))) {
         if (parseInt(edad) >= 18) {
            window.location.href= "catalogoBebidas.html";
         } else {
             alert(textoNodo.nodeValue);
             window.location.href= "../index.html";
        }
        } else {
          alert("La edad ingresada no es válida")
          window.location.href= "shop.html";
        }
     } 

  //prueba DOM
let textoNodo = document.createTextNode("sos muy chico")


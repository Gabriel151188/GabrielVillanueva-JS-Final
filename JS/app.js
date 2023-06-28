function validarEdad() {
    let edad = prompt("Ingresa tu edad:");
          
    if (!isNaN(parseInt(edad))) {
         if (parseInt(edad) >= 18) {
            window.location.href= "catalogoBebidas.html";
         } else {
             alert("Lo siento, debes ser mayor de 18 años para acceder a esta página");
             window.location.href= "../index.html";
        }
    } else {
      alert("La edad ingresada no es válida")
      window.location.href= "shop.html";
    }
  }

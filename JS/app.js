function validarEdad(event) {
   event.preventDefault(); 

   let edad = prompt("Ingresa tu edad:");

   if (!isNaN(parseInt(edad))) {
       if (parseInt(edad) >= 18) {
           window.location.href = "catalogoBebidas.html";
       } else {
            alert("Sos muy chico... Lo siento.");
            window.location.href = "../index.html";
       }
   } else {
       alert("La edad ingresada no es válida");
       window.location.href = "shop.html";
   }
}

 


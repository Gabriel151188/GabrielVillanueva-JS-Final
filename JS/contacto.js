console.log ("reading for code...")

//Obtener las referencias del elemento DOM

let form = document.getElementById("myForm");
let submitButton = document.getElementById("submitButton");


//agregamos el evento al boton

submitButton.addEventListener("click", function(e){
    e.preventDefault();


    let nombreInput = document.getElementById("name");
    let telInput = document.getElementById("tel");
    let emailInput = document.getElementById("email");
    let textAreaInput = document.getElementById("textArea");

    let name = nombreInput.value;
    let tel = telInput.value;
    let email = emailInput.value;
    let textArea = textAreaInput.value

    console.log("el nombre es " + name + ", el telefono es " + tel + ", el email es " + email + " y este es el comentario " + textArea);

    //validacion del mail
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;        
        
    if (emailRegex.test(email)) {
        
        } else {
        alert("revisa la direccion");
    }   
     
        
    //prueba exitosa de set y get storage 
    let form = document.getElementById("myForm");
    localStorage.setItem("formulario", form);
    localStorage.setItem("nombre", name);
    localStorage.setItem("telefono", tel);
    localStorage.setItem("email", email);
    localStorage.setItem("comentario", textArea);


    let mailStorage = localStorage.getItem("email")
    console.log("el mail guardado en el local es: ", mailStorage);
 
})

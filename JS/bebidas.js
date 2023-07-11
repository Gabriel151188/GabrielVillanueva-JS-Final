

class Producto{
constructor(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}
}

const productos = [
  new Producto('ANDES ORIGEN', 500),
  new Producto('ANDES ROJA', 550),
  new Producto('ANDES NEGRA', 500),
  new Producto('ANDES ROJA IPA', 550),
];




const carrito = [];


function agregarAlCarrito(nombre, precio) {
  let producto = new Producto(nombre, precio);
  carrito.push(producto);
  localStorage.setItem("producto", JSON.stringify(carrito))
   console.log("Se agregó al carrito: " + nombre + " - Precio: $" + precio);
   console.log("Total del carrito: $" + calcularTotal());
   console.log("En el carrito se encuentra:");
  carrito.forEach((producto) => {
  // console.log(producto.nombre);
  let productStorage = localStorage.getItem("producto", (carrito))
  console.log("Estos productos estan en el carrito", productStorage, "representando un total de $" + calcularTotal());
  
   })
 }



btnAndesRubia.addEventListener("click", () => {
  agregarAlCarrito("Andes Rubia", 500);
});
btnAndesRoja.addEventListener("click", () => {
  agregarAlCarrito("Andes Roja", 550);
});
btnAndesNegra.addEventListener("click", () => {
  agregarAlCarrito("Andes Negra", 500);
});
btnAndesRojaIpa.addEventListener("click", () => {
  agregarAlCarrito("Andes Roja Ipa", 550);
});

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}




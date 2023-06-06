
function calcularCostoTotal(productos) {
  let costoTotal = 0;
  
  for (let i = 0; i < productos.length; i++) {
    costoTotal += productos[i].precio;
  }
  
  return costoTotal;
}
 
const productosSeleccionados = [
  { nombre: 'Producto 1', precio: 10 },
  { nombre: 'Producto 2', precio: 20 },
  { nombre: 'Producto 3', precio: 30 }
];

const costoTotal = calcularCostoTotal(productosSeleccionados);
console.log('Costo total:', costoTotal);
  
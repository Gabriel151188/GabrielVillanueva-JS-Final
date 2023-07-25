class Producto {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const carrito = JSON.parse(localStorage.getItem("producto")) || [];

async function agregarAlCarrito(nombre, precio) {
  let producto = new Producto(nombre, precio);
  carrito.push(producto);
  localStorage.setItem("producto", JSON.stringify(carrito));
  actualizarCarritoVisual();
  console.log("Se agregó al carrito: " + nombre + " - Precio: $" + precio);
  console.log("Total del carrito: $" + calcularTotal());
  console.log("En el carrito se encuentra:");
  carrito.forEach((producto) => {
    console.log(producto.nombre);
  });
}

async function eliminarDelCarrito(nombre) {
  const indice = carrito.findIndex((producto) => producto.nombre === nombre);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    localStorage.setItem("producto", JSON.stringify(carrito));
    actualizarCarritoVisual();
    console.log("Se eliminó del carrito: " + nombre);
    console.log("Total del carrito: $" + calcularTotal());
    console.log("En el carrito se encuentra:");
    carrito.forEach((producto) => {
      console.log(producto.nombre);
    });
  } else {
    console.log("El producto no existe en el carrito.");
  }
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

const productContainer = document.querySelector("#product-container");

async function getJProdCharacters() {
  try {
    const response = await fetch("../JSON/productos.json");
    
    const data = await response.json();

    if (Array.isArray(data)) {
      data.forEach((producto) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("col-sm-12", "col-md-6", "col-lg-3");

        characterDiv.innerHTML = `
          <div class="card" style="width: 100%;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.name}">
            <div class="card-body">
              <h5 class="card-title center">${producto.name}</h5>
              <p class="center">${producto.precio}</p>
              <button type="button" class="btn center btn-cat" data-nombre="${producto.name}" data-precio="${producto.precio}">Agregar al carrito</button>
            </div>
          </div>
        `;

        const btnAgregar = characterDiv.querySelector(".btn-cat");
        btnAgregar.addEventListener("click", () => {
          agregarAlCarrito(producto.name, producto.precio);
          Swal.fire({
            position: "top-right",
            icon: "success",
            imageUrl: producto.imagen,
            imageWidth: 100,
            imageAlt: "Custom image",
            title: "Se ha agregado " + producto.name + "!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        });

        productContainer.appendChild(characterDiv);
      });
    } else {
      console.error("Error: Los datos no son un array.");
    }
  } catch (err) {
    console.error(err);
  }
}

const carritoVacioMsg = document.getElementById("carrito-vacio");

function actualizarCarritoVisual() {
  const carritoProductos = document.getElementById("carrito-productos");
  carritoProductos.innerHTML = ""; // Limpia el contenido actual

  if (carrito.length === 0) {
    console.log("el carro esta vacio");
    carritoVacioMsg.style.display = "block";
  } else {
    carrito.forEach((producto) => {
      const productoDiv = document.createElement("div");
      productoDiv.classList.add("carrito-producto");

      productoDiv.innerHTML = `
        <p>${producto.nombre} - Precio: $${producto.precio}</p>
        <button class="btn-eliminar" data-nombre="${producto.nombre}">Eliminar</button>
      `;

      const btnEliminar = productoDiv.querySelector(".btn-eliminar");
      btnEliminar.addEventListener("click", () => {
        eliminarDelCarrito(producto.nombre);
        Swal.fire({
          position: "top-right",
          icon: "info",
          imageUrl: producto.imagen,
          imageWidth: 100,
          imageAlt: "Custom image",
          title: "Se ha eliminado " + producto.nombre + " del carrito!!!",
          showConfirmButton: false,
          timer: 1500,
        });
      });

      carritoProductos.appendChild(productoDiv);
    });
    carritoVacioMsg.style.display = "none";
  }
}

// Función para mostrar el contenido del carrito en el index.html
function mostrarCarrito() {
  const carritoContenedor = document.getElementById("carrito-contenedor");
  carritoContenedor.innerHTML = "";

  if (carrito.length === 0) {
    carritoContenedor.innerHTML = "<p>El carrito está vacío.</p>";
  } else {
    carrito.forEach((producto) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
        <p>${producto.nombre} - Precio: $${producto.precio}</p>
      `;
      carritoContenedor.appendChild(productoDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await getJProdCharacters();
  actualizarCarritoVisual();
});

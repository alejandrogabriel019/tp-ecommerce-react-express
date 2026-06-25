import "./App.css";

import Header from "./components/Header/Header";
import ListaProductos from "./components/ListaProductos/ListaProductos";
import Carrito from "./components/Carrito/Carrito";
import Total from "./components/Total/Total";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Productos from "./pages/Productos";
import CarritoPage from "./pages/CarritoPage";

function App() {

  // Estado que guarda los productos agregados al carrito
  const [carrito, setCarrito] = useState([]);

  // Estado que guarda los productos obtenidos desde la API
  const [productos, setProductos] = useState([]);

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {

    // find devuelve el primer elemento que cumple la condicion 
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    );

    // Si ya existe, aumenta su cantidad
    if (productoExistente) {

      const nuevoCarrito = carrito.map((item) =>

        // Si es el producto buscado, crea una copia
        // aumentando la cantidad en 1
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );

      // Actualiza el estado del carrito
      setCarrito(nuevoCarrito);

    } else {

      // Si no existe, agrega el producto al carrito
      // con cantidad inicial igual a 1
      setCarrito([
        ...carrito,
        {
          ...producto,
          cantidad: 1
        }
      ]);

    }

  };

  // Elimina completamente un producto del carrito
  const eliminarDelCarrito = (id) => {

    // Conserva todos los productos excepto
    // el que tiene el id recibido
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== id
    );

    setCarrito(nuevoCarrito);
  };

  // Aumenta la cantidad de un producto
  const aumentarCantidad = (id) => {

    const nuevoCarrito = carrito.map((producto) =>

      // Si coincide el id, aumenta la cantidad
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    );

    setCarrito(nuevoCarrito);
  };

  // Disminuye la cantidad de un producto
  const disminuirCantidad = (id) => {

    const nuevoCarrito = carrito.map((producto) =>

      // Si coincide el id, resta 1 unidad
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad - 1 }
        : producto

    )

    // Elimina automáticamente productos
    // cuya cantidad llegó a 0
    .filter((producto) => producto.cantidad > 0);

    setCarrito(nuevoCarrito);
  };

  // Se ejecuta una sola vez al cargar la aplicación
  useEffect(() => {

    // Solicita los productos al backend Express
    fetch("https://tp-ecommerce-react-express.onrender.com/productos")

      // Convierte la respuesta a JSON
      .then((respuesta) => respuesta.json())

      // Guarda los productos recibidos en el estado
      .then((datos) => {
  console.log("Datos recibidos:", datos);
  setProductos(datos);
})

      // Muestra errores en consola
      .catch((error) => console.error(error));

  }, []);

  return (
    <div className="App">

      {/* Header recibe el carrito para mostrar
          la cantidad total de productos */}
      <Header carrito={carrito} />

      <Routes>

        {/* Página principal de productos */}
        <Route
          path="/"
          element={
            <Productos
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />

        {/* Página del carrito */}
        <Route
          path="/carrito"
          element={
            <CarritoPage
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App

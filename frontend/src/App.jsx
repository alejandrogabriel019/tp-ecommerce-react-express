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
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Estado que guarda los productos obtenidos desde la API
  const [productos, setProductos] = useState([]);

  // Agregar al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([
        ...carrito,
        { ...producto, cantidad: 1 }
      ]);
    }
  };

  // Eliminar producto
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== id
    );
    setCarrito(nuevoCarrito);
  };

  // Aumentar cantidad
  const aumentarCantidad = (id) => {
    const nuevoCarrito = carrito.map((producto) =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    );
    setCarrito(nuevoCarrito);
  };

  // Disminuir cantidad
  const disminuirCantidad = (id) => {
    const nuevoCarrito = carrito
      .map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      )
      .filter((producto) => producto.cantidad > 0);

    setCarrito(nuevoCarrito);
  };

  // Traer productos
  useEffect(() => {
    fetch("https://tp-ecommerce-react-express.onrender.com/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <div className="App">
      <Header carrito={carrito} />

      <Routes>
        <Route
          path="/"
          element={
            <Productos
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />

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

export default App;
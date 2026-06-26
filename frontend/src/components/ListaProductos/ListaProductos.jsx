import "./ListaProductos.css";
import ProductoCard from "../ProductoCard/ProductoCard";

function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <>
      {/* Renderiza la lista de productos recibidos desde la API */}
      <h2 className="titulo-productos">Productos</h2>

      <div className="lista-productos">
        {productos &&
          productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
      </div>
    </>
  );
}

export default ListaProductos;
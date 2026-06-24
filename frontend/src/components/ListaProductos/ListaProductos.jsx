import ProductoCard from "../ProductoCard/ProductoCard";

function ListaProductos({ productos, agregarAlCarrito }) {
  if (!Array.isArray(productos)) {
    return <p>Cargando productos...</p>;
  }

  return (
    <>
      <h2 className="titulo-productos">Productos</h2>

      <div className="lista-productos">
        {productos.map((producto) => (
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
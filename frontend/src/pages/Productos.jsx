import ListaProductos from "../components/ListaProductos/ListaProductos";

function Productos({ productos, agregarAlCarrito }) {
    return (
        <div className="productos">
            <ListaProductos
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />  
        </div>
    );
}

export default Productos;
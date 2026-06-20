import Carrito from "../components/Carrito/Carrito";
import Total from "../components/Total/Total";

function CarritoPage({
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
}) {
    return (
        <div className="resumen">
            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
            />

            <Total carrito={carrito} />  
        </div>
    );
}

export default CarritoPage;
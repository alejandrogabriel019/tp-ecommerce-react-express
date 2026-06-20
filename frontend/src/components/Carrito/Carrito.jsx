import "./Carrito.css";

function Carrito({
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad
}) {

    return (
        <div className="carrito">
            <h2>Carrito ({carrito.length})</h2>

            {carrito.length === 0 ? (
                <p className="carrito-vacio">
                    No hay productos en el carrito
                    </p>
            ) : (
                carrito.map((producto, index) => (
                    <div className="item-carrito" key={index}>
                        <p>{producto.nombre} x{producto.cantidad} - $
                            {producto.precio * producto.cantidad}
                        </p>

                        <div className="controles-cantidad">
                            <button
                                className="btn-cantidad" 
                                onClick={() => disminuirCantidad(producto.id)}
                            >
                                -
                            </button>

                            <span className="cantidad">
                                 {producto.cantidad} 
                            </span>

                            <button
                               className="btn-cantidad"
                               onClick={() => aumentarCantidad(producto.id)}
                            >
                                +
                            </button>

                            <button
                           className="btn-eliminar"
                           onClick={() => eliminarDelCarrito(producto.id)}
                        >
                            Eliminar
                        </button>
                        
                        </div>

                    </div>
                ))
            )}
        </div>
    );
}

export default Carrito;
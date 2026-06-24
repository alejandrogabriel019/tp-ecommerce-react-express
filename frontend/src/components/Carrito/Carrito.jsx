import "./Carrito.css";

function Carrito({

    // Props recibidas desde App.jsx
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad

}) {

    return (

        <div className="carrito">

            {/* Muestra la cantidad de productos distintos en el carrito */}
            <h2>Carrito ({carrito.length})</h2>

            {/* Si el carrito está vacío muestra un mensaje */}
            {carrito.length === 0 ? (

                <p className="carrito-vacio">
                    No hay productos en el carrito
                </p>

            ) : (

                // Recorre todos los productos del carrito
                carrito.map((producto, index) => (

                    <div className="item-carrito" key={index}>

                        {/* Muestra nombre, cantidad y subtotal */}
                        <p>
                            {producto.nombre}
                            {" "}x{producto.cantidad}
                            {" "} - $
                            {producto.precio * producto.cantidad}
                        </p>

                        <div className="controles-cantidad">

                            {/* Disminuye la cantidad del producto */}
                            <button
                                className="btn-cantidad"
                                onClick={() => disminuirCantidad(producto.id)}
                            >
                                -
                            </button>

                            {/* Muestra la cantidad actual */}
                            <span className="cantidad">
                                {producto.cantidad}
                            </span>

                            {/* Aumenta la cantidad del producto */}
                            <button
                                className="btn-cantidad"
                                onClick={() => aumentarCantidad(producto.id)}
                            >
                                +
                            </button>

                            {/* Elimina completamente el producto */}
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
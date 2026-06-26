import "./ProductoCard.css";

function ProductoCard({producto, agregarAlCarrito}) {
    
    return(
        <div className="producto-card">

            <div className="producto-imagen">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>

            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
        </div>
    );
}

export default ProductoCard;
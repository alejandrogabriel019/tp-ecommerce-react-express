import "./Total.css";

function Total({carrito}) {
    
    const total = carrito.reduce(
        (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
        0
    );

    return(
        <div className="total">

            <h2>Total</h2>
            <p>${total}</p>

        </div>
    );
}

export default Total;
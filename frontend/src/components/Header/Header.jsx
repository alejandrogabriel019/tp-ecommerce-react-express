import "./Header.css";
import { Link } from "react-router-dom";

function Header({ carrito }) {

    const cantidadTotal = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    return(
        <header className="header">

            <h1>🍬 Tienda de golosinas</h1>

            <nav className="nav">

                <Link to="/" className="productos-link">
                    Productos
                </Link>

                <Link to="/carrito" className="carrito-icono">
                   🛒 Carrito ({cantidadTotal})
                </Link>    
            
            </nav>

        </header>
    );      
}

export default Header;
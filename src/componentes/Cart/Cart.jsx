import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../Contex/CarritoContex";
import CartItem from "../CartItem/CartItem";
import './Cart.css'
const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce( (total, elemento) => total + elemento.cantidad, 0);

    const total = carrito.reduce((total,elemento) => total + (elemento.item.precio * elemento.cantidad), 0);

    
    if (totalCantidad === 0) { 
        return (
            <>
            <h2> No hay productos en el carrito</h2>
        <Link className='button' to='/'> Seguir comprando </Link>
            </>
        )
    } 

    return (
        <div>
            {carrito.map(elemento =>  <CartItem key={elemento.id } {...elemento} />)} 
            <h3> Cantidad Total: {totalCantidad} </h3>
            <h3>Total: $  {total} </h3>
            <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
            <Link className='button' to="/checkout" > Finalizar Compra </Link>
        </div>
    ) 
}

export default Cart

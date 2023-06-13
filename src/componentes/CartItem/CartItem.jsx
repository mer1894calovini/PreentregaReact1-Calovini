import { useContext } from "react";
import { CarritoContext } from "../../Contex/CarritoContex";
import './CartItem.css'
const CartItem = ({ item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);


    return (
        <div>
            <h4>{ item.nombre}</h4>
            <p> Cantidad: {cantidad}</p>
            <p> Precio: {item.precio}</p>
            <button onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem

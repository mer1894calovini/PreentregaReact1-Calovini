import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Contex/CarritoContex';
import { useContext } from 'react';



const ItemDetail = ({id,nombre, precio, img, stock}) => {
    
    
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);
    
    const manejadorCantidad= (cantidad) => {
        setAgregarCantidad(cantidad);
        
    const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2> Nombre: {nombre} </h2>
            <h3> Precio: {precio} </h3>
            <h4> Id: {id} </h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium iste laudantium quisquam quaerat tempora quis tenetur! Nesciunt, officia reiciendis. Ad iusto tempore alias fugit maxime delectus optio laborum. Debitis?</p>
            <img src={img} alt= {nombre} />
            {
                agregarCantidad > 0 ? ( <Link to="/cart"> Terminar Compra </Link> ) : (< ItemCount inicial={1} stock={stock} agregarAlCarrito={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail

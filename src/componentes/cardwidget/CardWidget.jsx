
import './CardWidget.css';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Contex/CarritoContex';
import { useContext } from 'react';
const CardWidget = () => {
    const {carrito } = useContext(CarritoContext);
    
    const totalCantidad = carrito.reduce( (total, elemento) => total + elemento.cantidad, 0);

    const carro = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
    return (
        <div>
            <Link style={{textDecoration:"none"}} to='/cart'>
                <img className='carrito' src={carro} alt="carrillo" />
                {
                    totalCantidad > 0 && <strong className='itemsIndicador'> {totalCantidad} </strong>
                }
            </Link>
        </div>
    )
}

export default CardWidget

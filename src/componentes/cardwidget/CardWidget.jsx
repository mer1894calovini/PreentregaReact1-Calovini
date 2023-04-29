
import './CardWidget.css'
const CardWidget = () => {
    const carro = "https://cdn.icon-icons.com/icons2/67/PNG/512/shoppingcartfull_compras_carr_13340.png"
    return (
        <div>
            <img className='carrito' src={carro} alt="carrillo" />
            <strong> 5 </strong>
        </div>
    )
}

export default CardWidget

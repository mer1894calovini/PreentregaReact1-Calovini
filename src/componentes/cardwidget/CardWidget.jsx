
import './CardWidget.css'
const CardWidget = () => {
    const carro = "https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
    return (
        <div>
            <img className='carrito' src={carro} alt="carrillo" />
            <strong className='strong'> 5 </strong>
        </div>
    )
}

export default CardWidget

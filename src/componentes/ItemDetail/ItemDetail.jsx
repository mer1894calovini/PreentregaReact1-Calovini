import './ItemDetail.css'

const ItemDetail = ({id,nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <h2> Nombre: {nombre} </h2>
            <h3> Precio: {precio} </h3>
            <h4> Id: {id} </h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium iste laudantium quisquam quaerat tempora quis tenetur! Nesciunt, officia reiciendis. Ad iusto tempore alias fugit maxime delectus optio laborum. Debitis?</p>
            <img src={img} alt= {nombre} />
        </div>
    )
}

export default ItemDetail

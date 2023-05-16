import Item from "../Item/Item"

const ItemList = ({elementos}) => {
    return (
        <div className="contenedorElementos">
            {elementos.map(elementos => <Item key={elementos.id} {...elementos}/> )}
        </div>
    )
}

export default ItemList

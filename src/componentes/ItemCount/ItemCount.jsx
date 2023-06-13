import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({inicial, stock, agregarAlCarrito}) => {
    const [ itemCount, setItemCount ] = useState(inicial)

    const aumentarContador = () => {
        if (itemCount < stock ) {
            setItemCount (itemCount + 1);
        }
    } 

    const disminuirContador = () => {
        if (itemCount >= inicial) {
            setItemCount (itemCount - 1);
        }
    }


    return (
        <div>
            <button onClick={ disminuirContador }> - </button>
            <strong> {itemCount} </strong>
            <button onClick={ aumentarContador }> + </button>
            <br/>
            <button onClick= {() => agregarAlCarrito (itemCount) }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

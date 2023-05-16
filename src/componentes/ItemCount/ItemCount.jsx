import { useState } from 'react'

const ItemCount = ({inicial, stock}) => {
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

    const agregarAlCarrito = () =>{
        console.log(`agregado ${itemCount} items`);

    }


    return (
    <div>
        <h3>CONTADOR</h3>

        <button onClick={ disminuirContador }> - </button>
        <strong> {itemCount} </strong>
        <button onClick={ aumentarContador }> + </button>
        <br />
        <button onClick={ agregarAlCarrito }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

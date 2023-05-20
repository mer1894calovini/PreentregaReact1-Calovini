import  {useState, useEffect } from 'react'
import  { getDetalles} from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [elemento, setElemento] = useState(null);

    useEffect( () => {
        getDetalles()
        .then(respuesta =>setElemento(respuesta));
    },[] )

    return (
        <div>
            <ItemDetail {...elemento}/>
        </div>
    )
}

export default ItemDetailContainer

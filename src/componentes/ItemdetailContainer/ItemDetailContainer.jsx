import  {useState, useEffect } from 'react';
import  { getDetalles} from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [elemento, setElemento] = useState(null);

    const { idItem} = useParams();

    useEffect( () => {
        getDetalles(idItem)
        .then(respuesta =>setElemento(respuesta));
    },[idItem])

    return (
        <div>
            <ItemDetail {...elemento}/>
        </div>
    )
}

export default ItemDetailContainer


import  { useState, useEffect} from 'react';
import { getElementos } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [ elementos, setElementos] = useState ([]);

    useEffect( ()  => {
        getElementos
        .then( respuesta => setElementos(respuesta))
        .catch(error => console.error(error))
    }, [])



    return (
        <div>
            <h2>Productos</h2>
            <ItemList elementos={elementos} />
        </div>
    )
}

export default ItemListContainer

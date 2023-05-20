
import  { useState, useEffect} from 'react';
import { getElementos, getElementosPorCategorias } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [ elementos, setElementos] = useState ([]);
    
    const {idCategoria} = useParams();
    useEffect( ()  => {
        const functionElementos = idCategoria ? getElementosPorCategorias : getElementos; 
            
        functionElementos(idCategoria)
        .then(respuesta=> setElementos(respuesta))
        .catch(error => console.error(error))
    }, [idCategoria])



    return (
        <div>
            <h2>MUNDO FITNESS</h2>
            <ItemList elementos={elementos} />
        </div>
    )
}

export default ItemListContainer

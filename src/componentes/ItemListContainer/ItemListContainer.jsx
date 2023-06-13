
import  { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [ elementos, setElementos] = useState ([]);
    const {idCategoria} = useParams();

    useEffect(() => { 
        const misElementos = idCategoria ? query(collection(db, "inventario"), where("idCat","==", idCategoria)) : collection(db, "inventario");
        
        getDocs(misElementos)
        .then(res => { 
            const nuevosElementos = res.docs.map(doc => {
                const data = doc.data()
                return { id:doc.id, ...data}
            })
            setElementos(nuevosElementos);
        })
    
    },[idCategoria])
    
    return (
        <div>
            <h2>MUNDO FITNESS</h2>
            <ItemList elementos={elementos} />
        </div>
    )
}

export default ItemListContainer

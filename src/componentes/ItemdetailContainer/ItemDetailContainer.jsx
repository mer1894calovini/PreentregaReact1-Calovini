import  {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import  {db} from '../../services/config';
import  { getDoc, doc } from 'firebase/firestore';




const ItemDetailContainer = () => {
    const [elemento, setElemento] = useState(null);

    const { idItem} = useParams();

    useEffect ( () => {
        const nuevoDoc = doc(db,"inventario", idItem);

        getDoc(nuevoDoc)
            .then( res =>  {
                const data = res.data();
                const nuevoElemento = {id:res.id, ...data}
                setElemento(nuevoElemento);
            })
    },[idItem])

    return (
        <div>
            <ItemDetail {...elemento}/>
        </div>
    )
}

export default ItemDetailContainer

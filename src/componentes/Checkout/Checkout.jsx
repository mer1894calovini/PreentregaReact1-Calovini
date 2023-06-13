import { useContext, useState } from "react";
import { CarritoContext } from "../../Contex/CarritoContex";
import { db } from "../../services/config"; 
import { collection, addDoc } from "firebase/firestore"; 
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmacion,setEmailConfirmacion] = useState("");
    const [error,setError] = useState("");
    const [ordenId,setOrdenId] = useState("");
  
    const manejadorSubmit= (event)  => { 
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion ){ 
            setError("Por favor complete los campos");
            return;
        }
        if(email !== emailConfirmacion) { 
            setError("Los campos del email no coinciden");
            return;
        }

    const orden = { 
        items: carrito.map(elemento => ( {
            id: elemento.item.id,
            nombre: elemento.item.nombre,
            cantidad: elemento.cantidad,
        })),
        total: carrito.reduce((total, elemento) => total + elemento.item.precio * elemento.cantidad, 0),
        nombre,
        apellido,
        telefono,
        email
    };

    addDoc(collection (db, "ordenes"), orden)
        .then((docRef) =>{
            setOrdenId(docRef.id);
            vaciarCarrito();
        })
        .catch((error) => {
            setError("Se produjo un error al crear la orden, vuelva a intertarlos mas tarde");
        })
    }
  
    return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorSubmit}>
        
        {carrito.map (elemento =>(
            <div key={elemento.item.id}>
                <p> {elemento.item.nombre}  x  {elemento.cantidad} </p>
                <p className="precio">Precio: $  {elemento.item.precio} </p>
            <hr />
            </div>
        ))}
        <hr />

        <div className="form-group">
            <label htmlFor=""> Nombre </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="form-group">
            <label htmlFor=""> Apellido </label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div className="form-group">
            <label htmlFor=""> Telefono</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div className="form-group">
            <label htmlFor=""> Email </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
            <label htmlFor=""> Email Confirmación </label>
            <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

        {
            error && <p style={{ color: "red" }}> {error} </p>
        }

        <button className="miBtn" type="submit"> Finalizar Orden </button>

        {
            ordenId && (
                <strong className="ordenId">¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
            )
        }

        </form>
    </div>
    )
}

export default Checkout

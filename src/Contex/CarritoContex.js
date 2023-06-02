
import {useState, createContext } from "react";






export const CarritoContext = createContext({carrito:[] });

export const CarritoProvider = ({children}) => {
    const [carrito,setCarrito] = useState([]);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)){
            setCarrito(prev => [...prev, {item, cantidad}]);
        }else {
            console.log("Producto ya agregado");
        }
    } 
    const yaEstaEnCarrito = (id) => {
        return carrito.some(elemento => elemento.id === id );
    }
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(elemento =>elemento.id !== id);
            setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider >
    )


}

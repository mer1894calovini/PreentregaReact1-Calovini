
import './App.css'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemdetailContainer/ItemDetailContainer';
import { CarritoProvider } from './Contex/CarritoContex';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';


function App() {
  return (

    <BrowserRouter> 
      <CarritoProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }  /> 
        <Route path='categoria/:idCategoria' element={ <ItemListContainer/> } /> 
        <Route path='item/:idItem' element= { <ItemDetailContainer /> } /> 
        <Route path='cart' element= { <Cart/> } />
        <Route path='checkout' element= { <Checkout/> } />
        <Route path='*' element={<h2> Sitio en Construccion </h2>} />
      </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;


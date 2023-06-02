
import './App.css'; 
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemdetailContainer/ItemDetailContainer';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }  /> 
        <Route path='categoria/:idCategoria' element={ <ItemListContainer/> } /> 
        <Route path='Item/:idItem' element= { <ItemDetailContainer /> } /> 
        <Route path='*' element={<h2> Sitio en Construccion </h2>} />
      </Routes>
    </BrowserRouter>
     
    </>

  
  );
}

export default App;



import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';





function App() {
  return (
    <>
    <NavBar/>
    <h1>MUNDO DEPORTES</h1>
    <ItemListContainer greeting= "CHICOS FITNESS" />
    </>
    
  
  );
}

export default App;


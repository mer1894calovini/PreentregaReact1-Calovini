
import './NavBar.css'
import Logo from '../logo/Logo'
import CardWidget from '../cardwidget/CardWidget'
import  {NavLink, Link } from "react-router-dom"
const NavBar = () => {
  return (
    <header>
        <Link to = {"/"}>
          <img className='logo' src="https://cdn-icons-png.flaticon.com/512/9/9194.png" alt="Logo Pesas" />
        </Link>
          
          <ul>
            
            <li>
              <NavLink className="miBtn" activeClassName="active" to={"/categoria/2"} >INDUMENTARIA</NavLink>
            </li>

            <li>
              <NavLink className="miBtn" activeClassName="active" to={"/categoria/3"} >CALZADOS</NavLink> 
            </li>
            
            <li>
              <NavLink className="miBtn" activeClassName="active" to={"/categoria/4"}>ENTRENAMIENTO</NavLink> 
            </li>
          
          </ul>
      
      <CardWidget />
    </header>
  )
}

export default NavBar

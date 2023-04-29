
import './NavBar.css'
import CardWidget from '../cardwidget/CardWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Mundo Fitnes</h1>
        <nav>
          <ul>
            <li>ROPA</li>
            <li>CALZADOS</li>
            <li>ENTRENAMIENTO</li>
          </ul>
        </nav>
        <CardWidget />
    </header>
  )
}

export default NavBar

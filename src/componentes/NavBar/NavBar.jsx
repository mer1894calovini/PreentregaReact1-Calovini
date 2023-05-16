
import './NavBar.css'
import Logo from '../logo/Logo'
import CardWidget from '../cardwidget/CardWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Mundo Fitness</h1>
        <Logo />
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

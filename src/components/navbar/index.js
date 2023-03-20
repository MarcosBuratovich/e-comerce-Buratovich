import "./style.css"
import ShoppingCart from "../shopping-cart"
import logo from "../../extra/ski.png"

function Navbar() {
  return (
    <header>
      <h3>
        <img className="logo" src={logo} alt="Logo de la empresa"></img>
      </h3>
      <nav>
        <a href="/#">Ski</a>
        <a href="/#">Snowboard</a>
        <a href="/#">Camperas</a>
        <a href="/#">Accesorios</a>
      </nav>
      <div className="shopping-cart" elevation={3}>
        <ShoppingCart />
      </div>
    </header>
  )
}

export default Navbar

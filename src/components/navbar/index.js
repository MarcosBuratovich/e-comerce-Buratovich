import "./style.css"
import ShoppingCart from "../shopping-cart"
import logo from "../../extra/ski.png"

function Navbar() {
  return (
    <header>
      <h3>
        <img className="logo" src={logo}></img>
      </h3>
      <nav>
        <a href="/#">Ski</a>
        <a href="/#">Snowboard</a>
        <a href="/#">Camperas</a>
        <a href="/#">Accesorios</a>
      </nav>
      <button className="shopping-cart" elevation={3}>
        <ShoppingCart />
      </button>
    </header>
  )
}

export default Navbar

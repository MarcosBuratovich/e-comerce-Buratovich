import { useCart } from "../../components/context/CartContext"
import { combinedItems } from "../../components/utils/CombineList"
import ProductList from "../../components/productList/ProductList"
import { Container, Button } from "@mui/material"
import "./Checkout.css"

const Checkout = () => {
  const { cart, initialState, setCart } = useCart()

  const checkoutList = combinedItems(cart.list)

  return (
    <div className="cartDiv">
      <h1>Carrito de Compras</h1>
      <div className="containerCart">
        {checkoutList.map((data) => (
          <div className="prodCart">
            <ProductList key={data.id} data={data} isCheckout />
          </div>
        ))}
      </div>
      <Container className="containerCart">
        <h3>
          Cantidad de productos seleccionados: <span className="danger">{cart.items}</span> TOTAL <span className="success">${parseFloat(cart.amount).toFixed(2)}</span>.
        </h3>
        <br />
        <Button onClick={() => setCart(initialState)}>LIMPIAR EL CARRITO</Button>
      </Container>
    </div>
  )
}

export default Checkout

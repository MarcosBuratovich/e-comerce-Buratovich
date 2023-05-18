import { useCart } from "../../components/context/CartContext"
import { combinedItems } from "../../components/utils/CombineList"
import ProductList from "../../components/productList/ProductListCheck"
import "./Checkout.css"
import Modal from "../../components/modal/ModalCart"
import Chip from "@mui/joy/Chip"
import ElimButton from "../../components/button/ElimCart"

const Checkout = () => {
  const { cart } = useCart()

  const checkoutList = combinedItems(cart.list)

  return (
    <div className="cartDiv">
      <h1>Carrito de Compras</h1>
      <div className="containerCart">
        {checkoutList.map((data) => (
          <div className="prodCart">
            <ProductList key={data.id} data={data} isCheckout />
            <Chip>{data.count}</Chip>
          </div>
        ))}
      </div>
      <div className="containerCart">
        <h3>
          Cantidad de productos seleccionados: <span className="danger">{cart.items}</span> TOTAL <span className="success">${parseFloat(cart.amount).toFixed(2)}</span>.
        </h3>
      </div>
      <div className="containerCart">
        <ElimButton />
        <Modal />
      </div>
    </div>
  )
}

export default Checkout

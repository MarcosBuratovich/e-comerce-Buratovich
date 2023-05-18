import React from "react"
import Button from "@mui/joy/Button"
import { useCart } from "../context/CartContext"

const ElimProdButton = ({ data }) => {
  const { cart, setCart } = useCart()
  console.log("antes", cart)
  const ElimToCart = () => {
    let newItem
    let price2 = 0
    let count2 = 0

    cart.list.forEach((id) => {
      if (id.id === data.id) {
        count2 = id.count
        price2 = id.price
      }
    })
    console.log(count2)
    newItem = {
      ...cart,
      amount: cart.amount - price2 * count2,
      items: cart.items - count2,
    }
    cart.list.pop((list) => list.id === data.id)
    setCart(newItem)
  }

  return (
    <Button className="quantity-input__add" size="small" color="primary" onClick={ElimToCart}>
      Eliminar Producto
    </Button>
  )
}

export default ElimProdButton

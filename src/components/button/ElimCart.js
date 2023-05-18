import React from "react"
import Button from "@mui/joy/Button"
import { useCart } from "../context/CartContext"

const ElimButton = () => {
  const { initialState, setCart } = useCart()

  const ElimToCart = () => {
    setCart(initialState)
  }

  return (
    <Button className="quantity-input__add" size="small" color="primary" onClick={ElimToCart}>
      Limpiar Carrito
    </Button>
  )
}

export default ElimButton

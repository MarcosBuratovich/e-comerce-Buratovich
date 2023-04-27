import { Button } from "@mui/material"
import { useCart } from "../context/CartContext"

const AddButton = ({ data }) => {
  const { cart, setCart } = useCart()

  const addToCart = () => {
    let newItem

    if (cart.list.length && cart.list.some((list) => list.id === data.id)) {
      newItem = {
        ...cart,
        amount: cart.amount + data.price,
        items: cart.items + 1,
        list: [...cart.list, { ...data }],
      }
    } else {
      newItem = {
        ...cart,
        items: cart.items + 1,
        amount: cart.amount + data.price,
        list: [...cart.list, { ...data }],
      }
    }

    setCart(newItem)
  }

  return (
    <Button size="small" color="primary" onClick={addToCart}>
      Add to cart
    </Button>
  )
}

export default AddButton

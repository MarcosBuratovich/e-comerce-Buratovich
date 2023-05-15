import { Button } from "@mui/material"
import { useCart } from "../context/CartContext"
import React, { useState } from "react"
import "./Addcart.scss"

const AddButton = ({ data }) => {
  const { cart, setCart } = useCart()
  const [count, setCount] = useState(0)

  const addToCart = () => {
    let newItem

    if (cart.list.length && cart.list.some((list) => list.id === data.id)) {
      console.log(data)
      newItem = {
        ...cart,
        amount: cart.amount + data.price * count,
        items: cart.items + count,
        list: [...cart.list, { ...data }],
      }
    } else {
      newItem = {
        ...cart,
        items: cart.items + count,
        amount: cart.amount + data.price * count,
        list: [...cart.list, { ...data, count }],
      }
    }
    setCart(newItem)
  }

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1)
    })
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1)
      } else {
        return (prevCount = 0)
      }
    })
  }

  return (
    <div className="addcart-body">
      <div className="quantity-input">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
          -
        </button>
        <h3 className="quantity-input__screen">{count}</h3>
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
          +
        </button>
      </div>
      <Button className="quantity-input__add" size="small" color="primary" onClick={addToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default AddButton

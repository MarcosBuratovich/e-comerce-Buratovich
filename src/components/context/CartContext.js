import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const initialState = { items: 0, amount: 0, list: [] }
  const [cart, setCart] = useState(initialState)

  return <CartContext.Provider value={{ cart, initialState, setCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  return useContext(CartContext)
}

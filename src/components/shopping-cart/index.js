import React from "react"
import logo from "../../extra/cart-icon.png"
import "./style.css"
import IconButton from "@mui/material/IconButton"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

function ShoppingCart() {
  return (
    <div>
      <IconButton color="black" aria-label="add to shopping cart" size="large" variant="elevated">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  )
}

export default ShoppingCart

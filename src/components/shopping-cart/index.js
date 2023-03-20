import React from "react"
import "./style.css"
import IconButton from "@mui/material/IconButton"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

function ShoppingCart() {
  return (
    <IconButton color="black" aria-label="add to shopping cart" size="large" variant="elevated">
      <AddShoppingCartIcon />
    </IconButton>
  )
}

export default ShoppingCart

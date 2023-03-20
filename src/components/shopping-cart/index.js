import React from "react"
import "./style.css"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

function ShoppingCart() {
  return (
    <IconButton color="black" aria-label="add to shopping cart" size="large" variant="elevated">
      <ShoppingCartIcon />
    </IconButton>
  )
}

export default ShoppingCart

import React from "react"
import "./style.css"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"

const IconoCarrito = ({ cantidad }) => {
  return (
    <IconButton>
      <Badge badgeContent="1" color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}
export default IconoCarrito
//export default ShoppingCart

import React from "react"
import "./style.css"
import IconButton from "@mui/material/IconButton"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"
import { useCart } from "../context/CartContext"
import { NavLink } from "react-router-dom"

const IconoCarrito = ({ cantidad }) => {
  const { cart } = useCart()
  return (
    <NavLink to="/checkout">
      <IconButton>
        <Badge badgeContent={cart.items} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </NavLink>
  )
}
export default IconoCarrito

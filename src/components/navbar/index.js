import "./style.css"
import logo from "../../extra/ski.png"
import IconoCarrito from "../shopping-cart"
import { Link } from "react-router-dom"
import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

export default function ResponsiveAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton component={Link} to={"/"} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img className="logo" src={logo} alt="Logo de la empresa"></img>
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button component={Link} to={"/category/ski"} sx={{ my: 2, color: "white", display: "block" }}>
              Ski
            </Button>
            <Button component={Link} to={"/category/snowboard"} sx={{ my: 2, color: "white", display: "block" }}>
              Snowboard
            </Button>
          </Box>
          <div className="shopping-cart" elevation={3}>
            <IconoCarrito />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

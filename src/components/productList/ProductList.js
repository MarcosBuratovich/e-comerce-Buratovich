import React from "react"
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"
import "./ProductList.css"

const ProductList = ({ data }) => {
  return (
    <Card className="itemcard">
      <Link to={`/detail/${data.id}`}>
        <CardActionArea>
          <CardMedia className="imgcard" component="img" height="auto" image={data.image} alt={data.name} />
          <CardContent className="fullcard">
            <Typography className="namecard" gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography className="pricecard" variant="body2" color="text.secondary">
              {data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default ProductList

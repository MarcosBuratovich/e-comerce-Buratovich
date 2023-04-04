import products from "./products.json"
import ProductList from "../productList/ProductList"
import React, { useState } from "react"
import "./ProductCard.css"

const ProductCard = () => {
  const [productos] = useState(products)
  return (
    <div className="containerdiv">
      {productos.map((data) => {
        return <ProductList key={data.id} data={data} />
      })}
    </div>
  )
}

export default ProductCard

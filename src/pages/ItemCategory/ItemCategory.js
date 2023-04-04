import React, { useMemo } from "react"
import { useParams } from "react-router-dom"
import products from "../../components/productCard/products.json"
import ProductList from "../../components/productList/ProductList"
import "./ItemCategory.css"

const ItemListCategory = () => {
  let { type } = useParams()
  const producto2 = useMemo(() => products.filter((p) => p.type.toLowerCase() === type), [type])
  return (
    <div className="containerdiv">
      {producto2.map((data) => {
        return <ProductList key={data.id} data={data} />
      })}
    </div>
  )
}

export default ItemListCategory

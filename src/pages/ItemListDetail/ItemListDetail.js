import React, { useMemo } from "react"
import { useParams } from "react-router-dom"
import products from "../../components/productCard/products.json"
import ProductList from "../../components/productList/ProductList"
import "./ItemListDetail.css"

const ItemListDetail = () => {
  let { id } = useParams()
  //const [product] = useState(products.find((p) => p.id === parseInt(id)))

  const producto2 = useMemo(() => products.find((p) => p.id === parseInt(id)), [id])

  return <div className="detailcard">{!producto2 ? <p>No tengo producto</p> : <ProductList key={producto2.id} data={producto2} />}</div>
}

export default ItemListDetail

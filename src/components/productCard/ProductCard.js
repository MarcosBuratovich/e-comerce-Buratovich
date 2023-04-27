import ProductList from "../productList/ProductList"
import React, { useState, useEffect } from "react"
import "./ProductCard.css"
import Spinner from "../spinner/Spinner"
import { collection, query, getDocs } from "firebase/firestore"
import { itemjson } from "../../firebase/firebaseConfig"

const ProductCard = () => {
  const [itemData, setItemData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProd = async () => {
      const q = query(collection(itemjson, "SkinSnowboard"))
      const docs = []
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })

      setItemData(docs)
    }
    getProd()
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="containerdiv">
          {itemData.map((data) => {
            return <ProductList key={data.id} data={data} />
          })}
        </div>
      )}
    </div>
  )
}

export default ProductCard

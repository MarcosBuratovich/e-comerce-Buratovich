import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../../components/productList/ProductList"
import { collection, query, getDocs, where } from "firebase/firestore"
import { itemjson } from "../../firebase/firebaseConfig"
import "./ItemCategory.css"

const ItemListCategory = () => {
  const [itemCat, setItemCat] = useState([])

  let { type } = useParams()

  useEffect(() => {
    const itemCat = async () => {
      const q = query(collection(itemjson, "SkinSnowboard"), where("type", "==", type))
      const docs = []
      const querySnapshot = await getDocs(q)
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id })
      })
      // console.log(docs);
      setItemCat(docs)
    }
    itemCat()
  }, [type])

  return (
    <div className="containerdiv">
      {itemCat.map((data) => {
        return <ProductList key={data.id} data={data} />
      })}
    </div>
  )
}

export default ItemListCategory

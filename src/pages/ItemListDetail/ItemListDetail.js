import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material"
import { collection, query, getDocs, where, documentId } from "firebase/firestore"
import { itemjson } from "../../firebase/firebaseConfig"
import "./ItemListDetail.css"
import AddButton from "../../components/button/AddCart"

const ItemListDetail = () => {
  const [itemDetail, setItemDetail] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const itemDetail = async () => {
      const q = query(collection(itemjson, "SkinSnowboard"), where(documentId(), "==", id))
      const docs = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setItemDetail(docs)
    }
    itemDetail()
  }, [id])

  return (
    <Card className="itemcard">
      {itemDetail.map((data) => {
        return (
          <div className="detailcard">
            <CardMedia className="imgcard" component="img" height="auto" image={data.image} alt={data.name} />
            <CardContent className="fullcard">
              <Typography className="namecard" gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography className="pricecard" variant="body2" color="text.secondary">
                {data.price}
              </Typography>
              <CardActions>
                <AddButton key={data} data={data} />
              </CardActions>
            </CardContent>
          </div>
        )
      })}
    </Card>
  )
}

export default ItemListDetail

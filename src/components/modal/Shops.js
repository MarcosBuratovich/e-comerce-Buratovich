import React, { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { itemjson } from "../../firebase/firebaseConfig"
import { useCart } from "../context/CartContext"
import FormControl from "@mui/joy/FormControl"
import Stack from "@mui/joy/Stack"
import Button from "@mui/joy/Button"
import Input from "@mui/joy/Input"
import Alert from "@mui/joy/Alert"

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
}

const initialState = {
  name: "",
  lastName: "",
  mail: "",
  lista: [],
}

const Shop = () => {
  const { cart, initialState, setCart } = useCart()
  const [values, setValues] = useState(initialState)
  const [purchaseID, setPurchaseID] = useState("")
  console.log("paso por aca")

  const onChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (e) => {
    console.log(cart)
    if (cart.items === 0) {
      console.log("No se hace la compra esta vacio")

      setValues(initialState)
    } else {
      e.preventDefault()
      console.log(values)
      const docRef = await addDoc(collection(itemjson, "purchase"), {
        values,
      })

      setPurchaseID(docRef.id)
      setValues(initialState)
      setCart(initialState)
    }
  }

  return (
    <div style={styles.containerShop}>
      <form className="FormContainer" onSubmit={onSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <Input placeholder="Nombre" name="name" type="tel" autoComplete="on" autoFocus fullWidth variant="outlined" size="lg" value={values.name} onChange={onChange} required />
          </FormControl>
          <FormControl>
            <Input placeholder="Apellido" name="lastName" type="tel" autoComplete="on" autoFocus fullWidth variant="outlined" size="lg" value={values.lastName} onChange={onChange} required />
          </FormControl>
          <FormControl>
            <Input placeholder="Mail" name="mail" type="tel" autoComplete="on" autoFocus fullWidth variant="outlined" size="lg" value={values.mail} onChange={onChange} required />
          </FormControl>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      {purchaseID.length ? (
        <Alert color="success" size="lg" variant="solid">
          La operacion fue exitosa : {purchaseID}
        </Alert>
      ) : null}
    </div>
  )
}

export default Shop

import * as React from "react"
import Button from "@mui/joy/Button"
import Modal from "@mui/joy/Modal"
import ModalDialog from "@mui/joy/ModalDialog"
import Typography from "@mui/joy/Typography"
import Shop from "./Shops"

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false)
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Finalizar Compra
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog aria-labelledby="basic-modal-dialog-title" aria-describedby="basic-modal-dialog-description" sx={{ maxWidth: 500 }}>
          <Typography id="basic-modal-dialog-title" component="h2">
            Finalizar compra
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Complete la informacion
          </Typography>
          <Shop />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  )
}

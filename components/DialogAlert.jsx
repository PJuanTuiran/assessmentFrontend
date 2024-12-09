import { Dialog, DialogActions } from "@mui/material"

function DialogAlert({open, onClose, message}) {
  return (
      <Dialog open={open}>
          <DialogTitle>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>{message }</DialogContentText>
            </DialogContent>
          <DialogActions>
              <Button>OK</Button>
              <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
          
    </Dialog>
  )
}
export default DialogAlert
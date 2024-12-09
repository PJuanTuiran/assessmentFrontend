function DialogConfirmation({ open, onClose, onCloseConfirmation, message }) {
  return (
    <Dialog open={open}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseConfirmation}>OK</Button>
        <Button onClick={onClose}>Cancel</Button>
          </DialogActions>
    </Dialog>
  )
}
export default DialogConfirmation
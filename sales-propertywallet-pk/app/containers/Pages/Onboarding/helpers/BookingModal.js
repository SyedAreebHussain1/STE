import React from "react";
import AllSessionTable from "../../AllMettingsessions/helper/AllSessionTable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const BookingModal = ({ open, close, classes, name }) => {
  const handleClose = () => {
    close();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={700}
      >
        <DialogTitle id="form-dialog-title">
          {name ? name : "Book Now"}
        </DialogTitle>
        <DialogContent>
          <AllSessionTable />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" type="submit" onClick={handleClose}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookingModal;

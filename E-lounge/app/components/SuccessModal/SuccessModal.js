import { Button, Dialog, DialogContent } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React from "react";

const SuccessModal = ({ visible, close }) => {
  return (
    <Dialog keepMounted open={visible} onClose={close}>
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Check style={{ color: "green", fontSize: "100px" }} />
        </div>
        <h2 style={{ textAlign: "center", marginTop: "4%" }}>
          Your request has been submitted.
        </h2>
        <div>
            <Button color="primary" onClick={close}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;

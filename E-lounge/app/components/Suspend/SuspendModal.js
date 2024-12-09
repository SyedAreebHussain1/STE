import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import { CircularProgress, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { getFromStorage } from "../../utils/storage";
import { submitSuspendRequest } from "../../redux/modules/Suspend/actions";
import { useDispatch, useSelector } from "react-redux";
export default function SuspendModal(props) {
  const susp = useSelector((state) => state.getIn(["suspendRequest"]));

  const dispatch = useDispatch();
  const [request, setRequest] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSuspendRequest(request, dispatch);
  };

  return (
    <Dialog keepMounted open={true}>
      <DialogContent>
        {susp.data !== null ? (
          <>
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
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Cancel style={{ color: "red", fontSize: "100px" }} />
            </div>
            <h2 style={{ textAlign: "center", marginTop: "4%" }}>
              Your account has been suspended!
            </h2>
            <p style={{ textAlign: "center" }}>
              Reason:{" "}
              <span style={{ color: "red" }}>
                {getFromStorage("user").suspendReason !== undefined &&
                getFromStorage("user").suspendReason !== null
                  ? getFromStorage("user").suspendReason
                  : ""}
              </span>
            </p>
            <div style={{ width: "100%", paddingBottom: "3%" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="request"
                  placeholder="Write your request"
                  label="Request"
                  required
                  style={{ width: "100%" }}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                />
                <Button
                  style={{ marginTop: "5%" }}
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  disabled={susp.loading}
                >
                  {susp.loading ? (
                    <CircularProgress size={20} color="white" />
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

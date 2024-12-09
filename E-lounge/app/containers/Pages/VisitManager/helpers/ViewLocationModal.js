import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, withStyles } from "@material-ui/core";
import styles from "../../../../components/Forms/user-jss";
import { useDispatch } from "react-redux";
import SelectLatLongMap from "./SelectLatLngMap";

function ViewLocationModal({ open, close, classes, data }) {
  const [markers, setMarkers] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  const handleClose = () => {
    close();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.longitude && data?.latitude) {
      setMarkers([
        {
          lng: Number(data?.longitude),
          lat: Number(data?.latitude),
        },
      ]);
    }
  }, [data]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
      >
        <DialogTitle id="form-dialog-title">Location</DialogTitle>
        <DialogContent>
          <form>
            <Grid container spacing={1}>
              <Grid item lg={12} xs={12}>
                <div style={{ marginTop: 10 }}>
                  <SelectLatLongMap
                    markers={markers}
                    setMarkers={setMarkers}
                    setSelectedPlace={setSelectedPlace}
                  />
                </div>
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(ViewLocationModal);

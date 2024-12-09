import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  CircularProgress,
  Grid,
  withStyles,
  TextareaAutosize,
} from "@material-ui/core";
import styles from "../../../../components/Forms/user-jss";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import InputLabel from "../../../../utils/components/InputLabel";
import { getFromStorage } from "../../../../utils/storage";
import { errorMessage } from "../../../../utils/message";
import { requirementFormApi } from "../../../../redux/modules/MarketingRequirement/action";

function AddMarketingRequirement({ open, close, classes }) {
  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    getValues,
    reset,
  } = useForm();
  const user = getFromStorage("user");
  const handleClose = () => {
    close();
  };
  const dispatch = useDispatch();
  const requirementForm = useSelector((state) =>
    state.getIn(["requirementForm"])
  );

  function onFinish(event) {
    let body = {
      subject: event.subject,
      description: event.description,
      eLoungId: user?.eLoungeId,
    };
    requirementFormApi(dispatch, body, onSuccessAdd);
  }
  function onSuccessAdd() {
    close();
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
      >
        <DialogTitle id="form-dialog-title">
          Add New Marketing Requirement
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onFinish)}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <InputLabel>Subject</InputLabel>
                <div>
                  <Controller
                    name="subject"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        fullWidth
                        label=""
                        required
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item lg={12} xs={12}>
                <InputLabel>Description</InputLabel>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextareaAutosize
                      {...field}
                      label="Description"
                      style={{ width: "100%", height: 100 }}
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                {requirementForm.loading ? (
                  <CircularProgress
                    className={classes.progress}
                    size={20}
                    color="white"
                  />
                ) : (
                  <>Submit</>
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(AddMarketingRequirement);

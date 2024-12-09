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
import { updateRequirementFormApi } from "../../../../redux/modules/MarketingRequirement/action";

function UpdateMarketingRequirement({ open, close, classes, data }) {
  const { control, handleSubmit } = useForm();
  const [state, setState] = useState({
    subject: "",
    description: "",
  });
  const user = getFromStorage("user");
  const handleClose = () => {
    close();
  };
  const dispatch = useDispatch();
  const updateRequirementForm = useSelector((state) =>
    state.getIn(["updateRequirementForm"])
  );

  function onFinish(e) {
    let body = {
      subject: state.subject,
      description: state.description,
      eLoungId: user?.eLoungeId,
    };
    updateRequirementFormApi(dispatch, body, onSuccessAdd, data?.id);
  }
  function onSuccessAdd() {
    close();
  }

  useEffect(() => {
    if (data) {
      setState({
        subject: data?.subject,
        description: data?.description,
      });
    }
  }, [data]);
  console.log(data);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
      >
        <DialogTitle id="form-dialog-title">
          Update Marketing Requirement
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
                        value={state.subject}
                        fullWidth
                        label=""
                        required
                        onChange={(event) =>
                          setState({
                            ...state,
                            subject: event.target.value,
                          })
                        }
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
                      value={state.description}
                      label="Description"
                      style={{ width: "100%", height: 100 }}
                      required
                      onChange={(event) =>
                        setState({ ...state, description: event.target.value })
                      }
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
                {updateRequirementForm.loading ? (
                  <CircularProgress
                    className={classes.progress}
                    size={20}
                    color="white"
                  />
                ) : (
                  <>Update</>
                )}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(UpdateMarketingRequirement);

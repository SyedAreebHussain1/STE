import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
  withStyles,
  TextareaAutosize,
} from "@material-ui/core";
import styles from "../../../../components/Forms/user-jss";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useUpload } from "../../../../utils/hooks/useUpload";
import DocumentPreviewerBox from "../../../../utils/components/DocumentPreviewerBox";
import {
  addNewVisitsAction,
  uploadAttachments,
} from "../../../../redux/modules/Visit/action";
import Upload from "../../../../utils/components/Upload";
import SelectLatLongMap from "./SelectLatLngMap";
import InputLabel from "../../../../utils/components/InputLabel";
import { getFromStorage } from "../../../../utils/storage";

function AddNewVisitModal({ open, close, classes }) {
  const { control, handleSubmit, setValue, resetField, getValues } = useForm();
  const [markers, setMarkers] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  const user = getFromStorage("user");
  const uploadAttachmentsState = useSelector((state) =>
    state.getIn(["uploadAttachments"])
  );
  console.log(uploadAttachmentsState);
  const [imagesOrFiles, setImagesOrFiles] = useState({
    atachments: "",
  });
  const [
    Attachments,
    setAttachments,
    AttachmentsPreviews,
    deleteAttachments,
    resetAttachments,
    filesCountProject,
  ] = useUpload();
  const handleClose = () => {
    close();
  };
  const dispatch = useDispatch();
  const addNewVisit = useSelector((state) => state.getIn(["addNewVisit"]));

  function onFinish(e) {
    const body = {
      name: e.name,
      agencyPhone:
        e.phone[0] === "0" ? "+92" + e.phone.substring(1) : "+92" + e.phone,
      longitude: markers?.[0]?.lng.toString(),
      latitude: markers?.[0]?.lat.toString(),
      attachmentUrl: imagesOrFiles?.atachments?.[0],
      shortNote: e.shortNote,
      eLoungId: user?.eLoungeId,
    };
    addNewVisitsAction(dispatch, body, onSuccessAdd);
  }
  function onSuccessAdd() {
    close();
  }
  function onSuccess(data, name) {
    if (name === "atachments") {
      setImagesOrFiles((prev) => {
        return {
          ...prev,
          [name]: [...data],
        };
      });
      resetAttachments.resetProgress();
    }
  }

  function deleteFile(name, fileUrl) {
    const newFiles = imagesOrFiles[name].filter((item) => item !== fileUrl);
    setImagesOrFiles((prev) => {
      return {
        ...prev,
        [name]: newFiles,
      };
    });
  }

  useEffect(() => {
    if (Attachments.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < Attachments.length; i++) {
        formData.append("files", Attachments[i]);
      }
      uploadAttachments(dispatch, formData, onSuccess, "atachments");
    }
  }, [Attachments]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
      >
        <DialogTitle id="form-dialog-title">Add New Visit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onFinish)}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <InputLabel>Name</InputLabel>
                <div>
                  <Controller
                    name="name"
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
              <Grid item xs={12} md={6}>
                <InputLabel>Agency Phone</InputLabel>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        prefix="+92"
                        fullWidth
                        variant="outlined"
                        label=""
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              +92
                            </InputAdornment>
                          ),
                        }}
                        onKeyPress={(event) => {
                          if (!/[0-9,.]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item lg={12} xs={12}>
                <InputLabel>Short Note</InputLabel>
                <Controller
                  name="shortNote"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextareaAutosize
                      {...field}
                      label="Short Note"
                      style={{ width: "100%", height: 100 }}
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <div style={{ marginTop: 10 }}>
                  <SelectLatLongMap
                    markers={markers}
                    setMarkers={setMarkers}
                    setSelectedPlace={setSelectedPlace}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div style={{ marginTop: 10 }}>
                  <Upload
                    name="attachments"
                    files={Attachments}
                    setFiles={setAttachments}
                    supportedFileTypes={["png", "jpg", "jpeg", "pdf"]}
                    supportedText={"Files Supported  JPG,JPEG,PNG,PDF"}
                    fileUploadLimit={1}
                    filesCount={filesCountProject}
                  />
                </div>
              </Grid>
              <Grid item md={12} xs={12}>
                <div style={{ maxHeight: 369, overflowY: "auto" }}>
                  {imagesOrFiles.atachments.length > 0 &&
                    imagesOrFiles.atachments.map((val, i) => (
                      <DocumentPreviewerBox
                        key={i}
                        fileName={
                          val
                            ?.split("/")
                            .at(-1)
                            .split("-")[1]
                        }
                        // fileSize={formatBytes(val.size)}
                        onClick={() => {
                          deleteFile("atachments", val);
                        }}
                      />
                    ))}
                </div>
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                {addNewVisit.loading ? (
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

export default withStyles(styles)(AddNewVisitModal);

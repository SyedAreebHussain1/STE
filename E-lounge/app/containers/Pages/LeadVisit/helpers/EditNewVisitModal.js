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
  editVisitsAction,
  uploadAttachments,
} from "../../../../redux/modules/Visit/action";
import Upload from "../../../../utils/components/Upload";
import SelectLatLongMap from "./SelectLatLngMap";
import InputLabel from "../../../../utils/components/InputLabel";
import { getFromStorage } from "../../../../utils/storage";

function EditNewVisitModal({ open, close, classes, data }) {
  const { control, handleSubmit, setValue, resetField, getValues } = useForm();
  const [markers, setMarkers] = useState([]);
  const [state, setState] = useState({
    shortNote: "",
    name: "",
    phone: "",
  });
  const [selectedPlace, setSelectedPlace] = useState({});
  const user = getFromStorage("user");
  const [imagesOrFiles, setImagesOrFiles] = useState({
    atachments: "",
  });
  const uploadAttachmentsState = useSelector((state) =>
    state.getIn(["uploadAttachments"])
  );
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
  const editVisit = useSelector((state) => state.getIn(["editVisit"]));

  function onFinish(e) {
    e.preventDefault();
    const body = {
      name: state.name,
      agencyPhone:
        state.phone[0] === "0"
          ? "+92" + e.phone.substring(1)
          : "+92" + state.phone,
      longitude: String(markers?.[0]?.lng),
      latitude: String(markers?.[0]?.lat),
      attachmentUrl: imagesOrFiles?.atachments?.[0],
      shortNote: state.shortNote,
      eLoungId: user?.eLoungeId,
    };
    editVisitsAction(dispatch, body, onSuccessAdd, data?.id);
  }
  // console.log("state", data);
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

  useEffect(() => {
    if (data) {
      setValue("name", data?.name);
      setValue("phone", data?.agencyPhone?.substring(3));
      setValue("shortNote", data?.shortNote);
      console.log("data", data);
      setState({
        shortNote: data?.shortNote,
        name: data?.name,
        phone: data?.agencyPhone?.substring(3),
      });

      if (data?.longitude && data?.latitude) {
        setMarkers([
          {
            lng: Number(data?.longitude),
            lat: Number(data?.latitude),
          },
        ]);
      }
      if (data?.attachmentUrl) {
        setImagesOrFiles({
          atachments: [data?.attachmentUrl],
        });
      }
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
        <DialogTitle id="form-dialog-title">Edit Visit</DialogTitle>
        <DialogContent>
          <form>
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
                        value={state.name}
                        required
                        onChange={(e) =>
                          setState({ ...state, name: e.target.value })
                        }
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
                        value={state.phone}
                        label=""
                        required
                        onChange={(e) =>
                          setState({ ...state, phone: e.target.value })
                        }
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
                      value={state.shortNote}
                      style={{ width: "100%", height: 100 }}
                      onChange={(e) =>
                        setState({ ...state, shortNote: e.target.value })
                      }
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
              {editVisit.loading ? (
                <Button color="primary">
                  <CircularProgress
                    className={classes.progress}
                    size={20}
                    color="white"
                  />
                </Button>
              ) : (
                <Button color="primary" onClick={onFinish}>
                  <>Submit</>
                </Button>
              )}
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(EditNewVisitModal);

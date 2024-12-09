import React, { useEffect, useRef, useState } from "react";
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
import { errorMessage } from "../../../../utils/message";
import {
  Delete,
  Mic,
  MicNone,
  Send,
  Stop,
  SubdirectoryArrowLeft,
} from "@material-ui/icons";

const mimeType = "audio/wav";

function AddVisitModal({ open, close, classes }) {
  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    getValues,
    reset,
  } = useForm();
  const [markers, setMarkers] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [selectVisitBy, setSelectVisitBy] = useState(false);
  const user = getFromStorage("user");
  const uploadAttachmentsState = useSelector((state) =>
    state.getIn(["uploadAttachments"])
  );
  // const [loaderForRecord, setLoaderForRecord] = useState(false);
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
    if (markers.length === 0) {
      errorMessage("Location is required");
      return;
    }
    if (audio) {
      sendRecordingHandler(e);
    } else {
      callApiHandler(e);
    }
  }

  function callApiHandler(e, dataUrl) {
    let body = {
      longitude: markers?.[0]?.lng.toString(),
      latitude: markers?.[0]?.lat.toString(),
      attachmentUrl: imagesOrFiles?.atachments?.[0],
      shortNote: e.shortNote,
      flVisit: selectVisitBy,
      eLoungId: user?.eLoungeId,
    };
    if (dataUrl) {
      body.voiceUrl = dataUrl;
    }
    //visit by agent
    if (selectVisitBy == false) {
      body.name = e.agencyName;
      body.agencyPhone =
        e.phone[0] === "0" ? "+92" + e.phone.substring(1) : "+92" + e.phone;
    } else if (selectVisitBy == true) {
      body.name = e.freelancerName;
      body.age = e.age;
      body.profession = e.profession;
      body.companyName = e.companyName;
      body.designation = e.designation;
      body.number =
        e.number[0] === "0" ? "+92" + e.number.substring(1) : "+92" + e.number;
      body.cnic = e.cnic;
    }
    if (selectVisitBy == false && e.agentEmail) {
      body.email = e.agentEmail;
    } else if (selectVisitBy == true && e.freelancerEmail) {
      body.email = e.freelancerEmail;
    }

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
  function handleSelect(event, field) {
    field.onChange();
    setSelectVisitBy(event.target.value);
    reset();
  }
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [deleteRecording, setDeleteRecording] = useState(false);
  const [stream, setStream] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      errorMessage("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    // create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    // set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    // invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("recorded");
    // stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      // creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      // creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks(audioChunks);
      setDeleteRecording(true);
    };
  };
  const deleteRecordingHandler = () => {
    setRecordingStatus("inactive");
    setDeleteRecording(false);
    setAudio(null);
  };

  // function pauseRecording() {
  //   setRecordingStatus("pause");
  //   mediaRecorder.current.pause();
  // }
  // function resumeRecording() {
  //   setRecordingStatus("recording");
  //   mediaRecorder.current.resume();
  // }

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const sendRecordingHandler = (e) => {
    if (audio) {
      const formData = new FormData();
      formData.append("files", audioChunks[0]);
      uploadAttachments(
        dispatch,
        formData,
        (data) => {
          callApiHandler(e, data[0]);
        },
        "audio"
      );
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
        style={{ scrollbarWidth: "none" }}
      >
        <DialogTitle id="form-dialog-title">Add New Visit</DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit(onFinish)}>
            <Grid item xs={12} md={6}>
              <InputLabel>Visit by</InputLabel>
              <div style={{ marginBottom: "8px" }}>
                <Controller
                  name="flVisit"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      fullWidth
                      value={selectVisitBy}
                      onChange={(e) => handleSelect(e, field)}
                      name="privacy"
                      required
                      // className={classes.selectEmpty}
                    >
                      <MenuItem value={false}>Agency</MenuItem>
                      <MenuItem value={true}>Freelancer</MenuItem>
                    </Select>
                  )}
                />
              </div>
            </Grid>
            <Grid container spacing={1}>
              {selectVisitBy == false ? (
                <>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Agency Name</InputLabel>
                    <div>
                      <Controller
                        name="agencyName"
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
                    <InputLabel>Agent Phone</InputLabel>
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
                            maxLength={10}
                            // onKeyPress={(event) => {
                            //   if (!/[0-9,.]/.test(event.key)) {
                            //     event.preventDefault();
                            //   }
                            // }}
                            onKeyPress={(event) => {
                              if (
                                !/[0-9,.]/.test(event.key) ||
                                field.value.length >= 10
                              ) {
                                event.preventDefault();
                              }
                            }}
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Agent Email</InputLabel>
                    <div>
                      <Controller
                        name="agentEmail"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                          />
                        )}
                      />
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Freelancer Name</InputLabel>
                    <div>
                      <Controller
                        name="freelancerName"
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
                    <InputLabel>Freelancer Phone</InputLabel>
                    <div>
                      <Controller
                        name="number"
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
                            maxLength={10}
                            // onKeyPress={(event) => {
                            //   if (!/[0-9,.]/.test(event.key)) {
                            //     event.preventDefault();
                            //   }
                            // }}
                            onKeyPress={(event) => {
                              if (
                                !/[0-9,.]/.test(event.key) ||
                                field.value.length >= 10
                              ) {
                                event.preventDefault();
                              }
                            }}
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Freelancer Email</InputLabel>
                    <div>
                      <Controller
                        name="freelancerEmail"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Cnic</InputLabel>
                    <div>
                      <Controller
                        name="cnic"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                            onKeyPress={(event) => {
                              if (
                                !/[0-9,.]/.test(event.key) ||
                                field.value.length >= 13
                              ) {
                                event.preventDefault();
                              }
                            }}
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Age</InputLabel>
                    <div>
                      <Controller
                        name="age"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                            required
                            onKeyPress={(event) => {
                              if (
                                !/[0-9,.]/.test(event.key) ||
                                field.value.length >= 10
                              ) {
                                event.preventDefault();
                              }
                            }}
                          />
                        )}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel>Profession</InputLabel>
                    <div>
                      <Controller
                        name="profession"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            required
                            variant="outlined"
                            label=""
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Company Name</InputLabel>
                    <div>
                      <Controller
                        name="companyName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Designation</InputLabel>
                    <div>
                      <Controller
                        name="designation"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            variant="outlined"
                            label=""
                          />
                        )}
                      />
                    </div>
                  </Grid>
                </>
              )}

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
              <div className="audio-controls">
                {!permission ? (
                  <button
                    // className="buttonOfRecording"
                    onClick={getMicrophonePermission}
                    type="button"
                  >
                    Get Microphone
                  </button>
                ) : null}
                {permission && recordingStatus === "inactive" ? (
                  <button
                    className="buttonOfRecording"
                    onClick={startRecording}
                    type="button"
                  >
                    <Mic />
                  </button>
                ) : null}

                {recordingStatus === "recording" ? (
                  // ||
                  // recordingStatus === "pause"

                  <div
                    style={{
                      width: "300px",
                      height: "50px",
                      borderRadius: "25px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span class="recording" style={{ fontSize: "15px" }}>
                      Recording
                    </span>
                    <button
                      className="buttonOfRecording"
                      onClick={stopRecording}
                      type="button"
                    >
                      <Stop color="red" />
                    </button>
                  </div>
                ) : null}
                {/* {recordingStatus === "recording" ? (
                  <button onClick={pauseRecording} type="button">
                    Pause Recording
                  </button>
                ) : null} */}
                {/* {recordingStatus === "pause" ? (
                  <button onClick={resumeRecording} type="button">
                    Resume Recording
                  </button>
                ) : null} */}
              </div>
              {audio &&
              recordingStatus !== "recording" &&
              recordingStatus !== "inactive" ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={deleteRecordingHandler}
                    className="buttonOfRecording"
                    type="button"
                  >
                    <Delete />
                  </button>
                  <audio src={`${audio}`} type="audio/wav" controls />
                </div>
              ) : null}
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                color="primary"
                type="submit"
                disabled={recordingStatus === "recording"}
              >
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

export default withStyles(styles)(AddVisitModal);

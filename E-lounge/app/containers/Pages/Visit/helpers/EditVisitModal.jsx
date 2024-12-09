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
  editVisitsAction,
  uploadAttachments,
} from "../../../../redux/modules/Visit/action";
import SelectLatLongMap from "./SelectLatLngMap";
import InputLabel from "../../../../utils/components/InputLabel";
import { getFromStorage } from "../../../../utils/storage";
import { errorMessage } from "../../../../utils/message";
import { Delete, Mic, Stop } from "@material-ui/icons";

const mimeType = "audio/webm";

function EditVisitModal({ open, close, classes, data }) {
  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    getValues,
    reset,
  } = useForm();
  const [markers, setMarkers] = useState([]);
  const [selectVisitBy, setSelectVisitBy] = useState("");
  const [state, setState] = useState({
    shortNote: "",
    name: "",
    phone: "",
    email: "",
    cnic: "",
    companyName: "",
    age: "",
    profession: "",
    designation: "",
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

  const dispatch = useDispatch();
  const editVisit = useSelector((state) => state.getIn(["editVisit"]));

  function onFinish(e) {
    if (!state.freelancerPhone && selectVisitBy == true) {
      errorMessage("Phone is required");
      return;
    }
    if (!state.agencyPhone && selectVisitBy == false) {
      errorMessage("Phone is required");
      return;
    }
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
      shortNote: state.shortNote,
      flVisit: selectVisitBy,
      eLoungId: user?.eLoungeId,
    };
    //visit by agent
    if (recordingStatus === "recorded") {
      body.voiceUrl = dataUrl || data?.voiceUrl;
    }
    if (selectVisitBy == false) {
      body.name = state.agencyName;
      body.agencyPhone =
        state.agencyPhone[0] === "0"
          ? "+92" + state.agencyPhone.substring(1)
          : "+92" + state.agencyPhone;
    } else if (selectVisitBy == true) {
      body.name = state.freelancerName;
      body.age = state.age;
      body.profession = state.profession;
      body.companyName = state.companyName;
      body.designation = state.designation;
      body.number =
        state.freelancerPhone[0] === "0"
          ? "+92" + state.freelancerPhone.substring(1)
          : "+92" + state.freelancerPhone;
      body.cnic = state.cnic;
    }
    if (selectVisitBy == false && state.agencyEmail) {
      body.email = state.agencyEmail;
    } else if (selectVisitBy == true && state.freelancerEmail) {
      body.email = state.freelancerEmail;
    }
    editVisitsAction(dispatch, body, onSuccessAdd, data?.id);
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
    setState({
      freelancerName: "",
      freelancerPhone: "",
      freelancerEmail: "",
      companyName: "",
      age: "",
      designation: "",
      profession: "",
      cnic: "",
      agencyName: "",
      agencyPhone: "",
      agencyEmail: "",
      voiceUrl: "",
    });
  }

  useEffect(() => {
    if (data) {
      setSelectVisitBy(data?.flVisit);
      setValue("shortNote", data?.shortNote);
      // agency
      if (data?.flVisit === false) {
        setValue("agencyName", data?.name);
        setValue("agencyPhone", data?.agencyPhone?.substring(3));
        setValue("agencyEmail", data?.email);
        if (data?.voiceUrl) {
          setAudio(data?.voiceUrl);
          setRecordingStatus("recorded");
        }
        setState({
          shortNote: data?.shortNote,
          agencyName: data?.name,
          agencyPhone: data?.agencyPhone?.substring(3),
          agencyEmail: data?.email,
          voiceUrl: data?.voiceUrl,
        });
      } else {
        setValue("freelancerName", data?.name);
        setValue("freelancerPhone", data?.number?.substring(3));
        setValue("freelancerEmail", data?.email);
        setValue("companyName", data?.companyName);
        setValue("age", data?.age);
        setValue("profession", data?.profession);
        setValue("cnic", data?.cnic);
        setValue("designation", data?.designation);
        setState({
          shortNote: data?.shortNote,
          freelancerName: data?.name,
          freelancerPhone: data?.number?.substring(3),
          freelancerEmail: data?.email,
          companyName: data?.companyName,
          age: data?.age,
          designation: data?.designation,
          profession: data?.profession,
          cnic: data?.cnic,
          voiceUrl: data?.voiceUrl,
        });
      }

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

  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
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
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      console.log(audioUrl);
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
      >
        <DialogTitle id="form-dialog-title">Edit Visit</DialogTitle>
        <DialogContent>
          <form>
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
                    >
                      <MenuItem value={false}>Agency</MenuItem>
                      <MenuItem value={true}>Freelancer</MenuItem>
                    </Select>
                  )}
                />
              </div>
            </Grid>
            <Grid container spacing={1}>
              {selectVisitBy === false ? (
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
                            value={state.agencyName}
                            required
                            onChange={(e) =>
                              setState({ ...state, agencyName: e.target.value })
                            }
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Agent Phone</InputLabel>
                    <div>
                      <Controller
                        name="agencyPhone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            prefix="+92"
                            fullWidth
                            variant="outlined"
                            value={state.agencyPhone}
                            label=""
                            required
                            onChange={(e) =>
                              setState({
                                ...state,
                                agencyPhone: e.target.value,
                              })
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
                  <Grid item xs={12} md={6}>
                    <InputLabel>Agency Email</InputLabel>
                    <div>
                      <Controller
                        name="agencyEmail"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            value={state.agencyEmail}
                            fullWidth
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({
                                ...state,
                                agencyEmail: e.target.value,
                              })
                            }
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
                            value={state.freelancerName}
                            required
                            onChange={(e) =>
                              setState({
                                ...state,
                                freelancerName: e.target.value,
                              })
                            }
                          />
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>Freelancer Phone</InputLabel>
                    <div>
                      <Controller
                        name="freelancerPhone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <TextField
                            {...field}
                            prefix="+92"
                            fullWidth
                            variant="outlined"
                            value={state.freelancerPhone}
                            label=""
                            required
                            onChange={(e) =>
                              setState({
                                ...state,
                                freelancerPhone: e.target.value,
                              })
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
                            value={state.freelancerEmail}
                            fullWidth
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({
                                ...state,
                                freelancerEmail: e.target.value,
                              })
                            }
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
                            value={state.cnic}
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({ ...state, cnic: e.target.value })
                            }
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
                            value={state.age}
                            onKeyPress={(event) => {
                              if (
                                !/[0-9,.]/.test(event.key) ||
                                field.value.length >= 10
                              ) {
                                event.preventDefault();
                              }
                            }}
                            onChange={(e) =>
                              setState({ ...state, age: e.target.value })
                            }
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
                            value={state.profession}
                            fullWidth
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({ ...state, profession: e.target.value })
                            }
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
                            value={state.companyName}
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({
                                ...state,
                                companyName: e.target.value,
                              })
                            }
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
                            value={state.designation}
                            variant="outlined"
                            label=""
                            onChange={(e) =>
                              setState({
                                ...state,
                                designation: e.target.value,
                              })
                            }
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

                <div className="audio-controls">
                  {!permission ? (
                    <button onClick={getMicrophonePermission} type="button">
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
                </div>
                {audio && recordingStatus === "recorded" ? (
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
                    <audio src={audio} controls />
                  </div>
                ) : null}
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
                <Button disabled={recordingStatus === "recording"} color="primary" onClick={onFinish}>
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

export default withStyles(styles)(EditVisitModal);

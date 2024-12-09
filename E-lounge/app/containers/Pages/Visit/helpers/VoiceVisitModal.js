import { Dialog, DialogContent } from "@material-ui/core";
import React, { useRef } from "react";
const VoiceVisitModal = ({ open, close, classes, data }) => {
  const handleClose = () => {
    close();
  };
  const ref = useRef();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth="500"
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f1f3f4",
        }}
      >
        <audio
          ref={ref}
          src={`${data?.voiceUrl}`}
          type="audio/wav"
          controls
          autoPlay
          style={{ width: "100%", borderRadius: "10px" }}
        />
        {/* <button
          onClick={() => {
            console.log(ref.current.duration);
          }}
        >
          hello
        </button> */}
      </div>
    </Dialog>
  );
};
export default VoiceVisitModal;

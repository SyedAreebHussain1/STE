import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "./learningCenter.css";

const ModalWhatsNewVideo = ({ isOpen, setOpen, video }) => {
  return (
    <div className="videoInWhatsNew">
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={video}
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
};

export default ModalWhatsNewVideo;

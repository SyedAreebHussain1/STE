import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { BsFillPlayBtnFill } from "react-icons/bs";
import youtubeicon from "../images/play icon-01.png";
import PlayButton from "./PlayButton";
import "./PlayButton.css";
export const Video = (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    window.fbq("track", "Video-watched");
  };
  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        // videoId="BNAAWA1QOtc"
        videoId="Kw7kMK6R9IE"
        onClose={() => setOpen(false)}
      />
      {props.cName === "balloting" ? (
        <>
          <a onClick={() => handleClick()} className="play-btn"></a>
          {/* <img
          src={youtubeicon}
          alt="phone"
          width="4%"
          style={{ marginTop: "2%" }}
          onClick={() => handleClick()}
        /> */}
        </>
      ) : (
        <>
          <a onClick={() => handleClick()} className="play-btn"></a>

          {/* <img
          src={youtubeicon}
          alt="phone"
          width="5%"
          style={{ marginTop: "4%" }}
          onClick={() => handleClick()}
        /> */}
        </>
      )}

      {/* <div style={{ marginTop: -10 }} className="social-icons">
        <div className="social-icon">
          <BsFillPlayBtnFill onClick={() => handleClick()} />
        </div>
      </div> */}
    </div>
  );
};

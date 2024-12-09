import { Button, Grid, Slider } from "@material-ui/core";
import {
  FullscreenRounded,
  PauseCircleFilledRounded,
  PlayArrow,
  PlayArrowRounded,
  PlayCircleFilledRounded,
  VolumeDown,
  VolumeUp,
} from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { tourCheckAction } from "../../../../redux/modules/Auth/actions";
import { getFromStorage } from "../../../../utils/storage";
import { useDispatch } from "react-redux";

const VideoControls = ({
  player,
  toggleVideo,
  isPlaying,
  videoProgress,
  onClickProgressBar,
  videoDuration,
  toggleToFullScreen,
  toggleModal,
  handleChangeVolume,
  volume
}) => {
  const [controlBarVisible, setControlBarVisible] = useState(false);
  const [mouseOverControlBar, setMouseOverControlBar] = useState(false);
  const controlBar = useRef();
  const mouseOverControlBarRef = useRef(mouseOverControlBar);


  
  const handleMouseMove = (timeout) => {
    setControlBarVisible(true);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!mouseOverControlBarRef.current) {
        setControlBarVisible(false);
      }
    }, 4000);
  };

  useEffect(() => {
    let timeout;

    window.addEventListener("mousemove", handleMouseMove);

    controlBar.current.addEventListener("mouseenter", () => {
      setMouseOverControlBar(true);
      mouseOverControlBarRef.current = true;
    });

    controlBar.current.addEventListener("mouseleave", () => {
      setMouseOverControlBar(false);
      mouseOverControlBarRef.current = false;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      controlBar.current.removeEventListener("mouseenter", () => {
        setMouseOverControlBar(true);
        mouseOverControlBarRef.current = true;
      });
      controlBar.current.removeEventListener("mouseleave", () => {
        setMouseOverControlBar(false);
        mouseOverControlBarRef.current = false;
      });
      clearTimeout(timeout);
    };
  }, [player]);
  const user = getFromStorage("user");
  return (
    <div
      ref={controlBar}
      className="video-bottom-bar"
      style={{ display: controlBarVisible ? "block" : "none" }}
    >
      <div
        className="video-bottom-control-bar"
        onClick={(e) => onClickProgressBar(e)}
      >
        <div
          className="video-bottom-seek-bar"
          style={{ width: `${videoProgress}%` }}
        />
      </div>
      <div className="video-bottom-action-btns">
        <div className="video-bottom-time-lapse">
          <div className="video-time-lapse"><span>{videoDuration.elapsedTime}</span> / <span>{videoDuration.totalTime}</span></div>
          <div className="sound-slider">
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider value={volume} onChange={handleChangeVolume} aria-labelledby="continuous-slider" />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
          </div>
        </div>
        <div className="video-bottom-actions">
          {isPlaying ? (
            <div className="video-bottom-pause" onClick={toggleVideo}>
              <span>
                <PauseCircleFilledRounded
                />
              </span>
            </div>
          ) : (
            <div className="video-bottom-play" onClick={toggleVideo}>
              <span>
                <PlayCircleFilledRounded
                />
              </span>
            </div>
          )}
          
        </div>
          <div className="video-bottom-fillscreen-btn">
          <FullscreenRounded onClick={toggleToFullScreen} />
          </div>
      </div>
      <div className="cta-container">
      <button
            color="primary"
            className="cta-book-now"
            onClick={() => {
              // tourCheckAction(dispatch, user.id);
              toggleModal()
            }}
          >
            Book Now
          </button>
      </div>
    </div>
  );
};

export default VideoControls;

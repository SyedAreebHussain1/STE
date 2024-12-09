import React, { useEffect, useRef, useState } from "react";
import { Player, ControlBar } from "video-react";
import "../../../../node_modules/video-react/dist/video-react.css";
import "./helpers/video.css";
import Video from "./helpers/video-1.mp4";
import VideoControls from "./helpers/VideoControls";
import { secondsToTime } from "../../../utils/mask";
import BookingModal from "./helpers/BookingModal";
import OnBoardingGuide from "./helpers/OnBoardingGuide";

const Onboarding = () => {
  const player = useRef();
  const [autoplay, setAutoPlay] = useState(false);
  const [videoDuration, setVideoDuration] = useState({
    elapsedTime: 0,
    totalTime: 0
  })
  const [bookingModal, setBookingModal] = React.useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false)
  function toggleModal(){
    setBookingModal(prev => !prev)
}
function toggleGuide(){
  setIsGuideOpen(prev => !prev)
}
  const [videoProgress, setVideoProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  function toggleToFullScreen(){
    player.current.toggleFullscreen()
  }

  //   useEffect(() => {
  //     if (autoplay) {
  //       player.current.play();
  //       setIsPlaying(true);
  //     }
  //   }, [player, autoplay]);
  function onClickProgressBar(e) {
    if (player.current && player.current.video.video.duration) {
      const seekPosition =
        (e.clientX - e.currentTarget.getBoundingClientRect().left) /
        e.currentTarget.offsetWidth;
      player.current.video.video.currentTime =
        seekPosition * player.current.video.video.duration;
    }
  }
  function toggleVideo() {
    if (player.current.video.video.paused) {
      setIsPlaying(true);
      player.current.video.video.play();
    } else {
      setIsPlaying(false);
      player.current.video.video.pause();
    }
  }
  const handleTimeUpdate = function() {
    if (!isNaN(this.duration)) {
      const convertedTotalTime = secondsToTime(Math.round(this.duration))
      const convertedElapsedTime = secondsToTime(Math.round(this.currentTime))
      setVideoDuration({
        totalTime: `${convertedTotalTime.h}:${convertedTotalTime.m}:${convertedTotalTime.s}`,
        elapsedTime: `${convertedElapsedTime.h}:${convertedElapsedTime.m}:${convertedElapsedTime.s}`
      })
      const percent_complete = this.currentTime / this.duration;
      setVideoProgress(Math.floor(percent_complete * 100));
    }
  };
  function videoEndedCallback(){
    toggleGuide()
  }

  const [volume, setVolume] = useState(50);

  const handleChangeVolume = (event, newValue) => {
    player.current.volume = newValue / 100
    setVolume(newValue);
  };
  useEffect(() => {
    // Define the click handler for the video element

    const videoElement = player.current.video.video;
    player.current.volume = volume / 100
    const handleVideoClick = () => {
      toggleVideo();
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    videoElement.addEventListener("pause", function() {
      setIsPlaying(false);
    });
    videoElement.addEventListener("play", function() {
      setIsPlaying(true);
    });
    videoElement.addEventListener("click", handleVideoClick);
    videoElement.addEventListener("ended", videoEndedCallback);
    
    // Clean up the event listener when component is unmounted
    return () => {
      videoElement.removeEventListener("click", handleVideoClick);
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("pause", function() {
        setIsPlaying(false);
      });
      videoElement.removeEventListener("ended", videoEndedCallback);
      videoElement.removeEventListener("play", function() {
        setIsPlaying(true);
      });
    };
  }, [isPlaying]);
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setAutoPlay(true);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  //   }, [player]);
  return (
    <>
    {isGuideOpen && <OnBoardingGuide openGuide={isGuideOpen} closeGuide={toggleGuide} />}
    {bookingModal && <BookingModal open={bookingModal} close={toggleModal} />}
      <Player
        ref={player}
        playsInline
        src={Video}
        width={"100%"}
        height={"100%"}
        fluid={false}
        autoPlay
      >
        <ControlBar
          disableCompletely={true}
          disableDefaultControls={true}
          className="my-class"
        />
      </Player>

      {!bookingModal && !isGuideOpen && <VideoControls
        player={player.current}
        toggleVideo={toggleVideo}
        isPlaying={isPlaying}
        videoProgress={videoProgress}
        onClickProgressBar={onClickProgressBar}
        videoDuration={videoDuration}
        toggleToFullScreen={toggleToFullScreen}
        toggleModal={toggleModal}
        
        handleChangeVolume={handleChangeVolume}
        volume={volume}
      />}
    </>
  );
};

export default Onboarding;

import React, { useEffect, useState } from "react";

const VideoModal = ({ data }) => {
  const [state, setState] = useState("");
  const url = data;
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  useEffect(() => {
    const match = url?.match(regex);
    if (match) {
      setState(`https://www.youtube.com/embed/${match[1]}`);
    } else {
      setState("");
    }
  }, [data]);
  return (
    <div
      style={{ touchAction: "pan-y" }}
      className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden w-full"
    >
      {state && (
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src={state}
          frameborder="0"
          allowfullscreen
        />
      )}
    </div>
  );
};
export default VideoModal;

// src/VideoPlayer.tsx
import { Card } from 'antd';
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="!w-full rounded-2xl overflow-hidden mx-auto my-4 shadow-lg !h-[300px]">
      <video
        className="w-full h-full"
        controls
        src={videoUrl}
        title="Video Player"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

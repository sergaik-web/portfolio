import React from "react";
import VideoMp4 from "./video/video6.mp4";

import "./BgVideo.scss";

const BgVideo = () => {
  return (
    <div id="video-container">
      <video
        id="bg-video"
        width="100%"
        height="auto"
        preload="auto"
        loop="loop"
        muted="muted"
        autoPlay="autoPlay"
      >
        <source src={VideoMp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default BgVideo;

import React from "react";
import "./App.scss";
import MenuList from "../MenuList";
import VideoMp4 from "./video/video.mp4";
import VideoWeb from "./video/video.webm";

export default class App extends React.Component {
  state = {
    delta: 0,
  };

  componentDidMount() {
    let delta = 0;
    document.addEventListener("wheel", (e) => {
      delta += e.deltaY || e.detail || e.wheelDelta;
      if (delta < 0) {
        delta = 0;
      }
      this.setState({ delta });
    });
  }

  render() {
    return (
      <div className="App">
        <div id="video-bg">
          <video
            width="100%"
            height="auto"
            preload="auto"
            loop="loop"
            muted="muted"
          >
            <source src={VideoMp4} type="video/mp4" />
            <source src={VideoWeb} type="video/webm" />
          </video>
        </div>
        <div className="fog">
          <div></div>
        </div>
        <MenuList />
      </div>
    );
  }
}

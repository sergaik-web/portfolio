import React from "react";
import "./App.scss";
import MenuList from "../MenuList";
import BgVideo from "../BgVideo/BgVideo";

export default class App extends React.Component {
  state = {
    delta: 0,
  };

  componentDidMount() {
    let video = document.querySelector("video");
    video.playbackRate = 0;
    let delta = 0;
    document.addEventListener("wheel", (e) => {
      delta += e.deltaY || e.detail || e.wheelDelta;
      if (delta < 0) {
        delta = 0;
      }
      this.setState({ delta });
      video.playbackRate = delta / 500;
    });
  }

  render() {
    return (
      <div className="App">
        <BgVideo />
        <MenuList />
      </div>
    );
  }
}

import React from "react";
import "./App.scss";
import LeftMenuList from "../left-menu-list";
import RightMenuList from "../right-menu-list";
import BgVideo from "../BgVideo/BgVideo";
import Scroll from "../scroll";

export default class App extends React.Component {
  state = {
    delta: 0,
  };

  componentDidMount() {
    let video = document.querySelector("#bg-video");
    video.playbackRate = 0;
    let delta = 0;
    document.addEventListener("wheel", (e) => {
      delta += e.deltaY || e.detail || e.wheelDelta;
      if (delta < 0) {
        delta = 0;
      } else if (delta >= 8000) {
        delta = 8000;
      }
      this.setState({ delta });
      video.playbackRate = delta / 1000;
    });
  }

  render() {
    return (
      <div className="App">
        <BgVideo />
        <Scroll />
        <RightMenuList />
        <LeftMenuList />
      </div>
    );
  }
}

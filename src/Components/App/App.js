import React from "react";
import "./App.scss";
import LeftMenuList from "../left-menu-list";
import RightMenuList from "../right-menu-list";
import BgVideo from "../BgVideo/BgVideo";
import Scroll from "../scroll";
import { connect } from "react-redux";
import { scrollPage } from "../../Actions/actions";

class App extends React.Component {
  componentDidMount() {
    document.addEventListener("wheel", (e) => {
      bgAnimation(this.props.scrollPage, this.props.scroll, e);
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

const bgAnimation = (func, scroll, e) => {
  let video = document.querySelector("#bg-video");
  video.playbackRate = 0;
  let delta = 0;
  delta += e.deltaY || e.detail || e.wheelDelta;
  if (delta < 0) {
    delta = 0;
  } else if (delta >= 8000) {
    delta = 8000;
  }
  console.log(delta, func(delta), scroll);
  func(delta);
  video.playbackRate = scroll / 1000;
};

const mapStateToProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatchToProps = { scrollPage };

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from "react";
import "./App.scss";
import LeftMenuList from "../left-menu-list";
import RightMenuList from "../right-menu-list";
import BgVideo from "../BgVideo/BgVideo";
import Scroll from "../scroll";
import bgAnimation from "../../scripts/bgAnimation";
import { connect } from "react-redux";
import { scrollPage } from "../../Actions/actions";

const App = (props) => {
  const eventListener = (event) => {
    let delta =
      (event.deltaY || event.detail || event.wheelDelta) + props.scroll;
    if (delta < 0) {
      delta = 0;
    } else if (delta >= 8000) {
      delta = 8000;
    }
    console.log(delta, props.scroll);
    props.scrollPage(delta);
    bgAnimation(delta);
  };

  useEffect(() => {
    const listener = (event) => eventListener(event);
    document.addEventListener("wheel", listener);

    return () => {
      document.removeEventListener("wheel", listener);
    };
  });

  return (
    <div className="App">
      <BgVideo />
      <Scroll />
      <RightMenuList />
      <LeftMenuList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatchToProps = { scrollPage };

export default connect(mapStateToProps, mapDispatchToProps)(App);

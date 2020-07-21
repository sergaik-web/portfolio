import React from "react";
import "./App.scss";
import LeftMenuList from "../left-menu-list";
import RightMenuList from "../right-menu-list";
import BgVideo from "../BgVideo/BgVideo";
import Scroll from "../scroll";
import bgAnimation from "../../scripts/bgAnimation";
import { connect } from "react-redux";
import {scrollPage} from "../../Actions/actions";

class App extends React.Component {
  componentDidMount() {
    this.writeScrollValue(this.props.scroll);
  }

  writeScrollValue(delta) {
    document.addEventListener("wheel", (e) => {
      delta += e.deltaY || e.detail || e.wheelDelta;
      if (delta < 0) {
        delta = 0;
      } else if (delta >= 8000) {
        delta = 8000;
      }
      this.props.scrollPage(delta);
      bgAnimation(this.props.scroll);
    })
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

const mapStateToProps = (state) => {
  return {
    scroll: state.scroll
  }
};

const mapDispatchToProps = { scrollPage };

export default connect(mapStateToProps, mapDispatchToProps)(App);

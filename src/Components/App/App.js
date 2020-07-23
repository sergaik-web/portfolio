import React from "react";
import "./App.scss";
import LeftMenuList from "../left-menu-list";
import RightMenuList from "../right-menu-list";
import BgVideo from "../BgVideo/BgVideo";
import Scroll from "../scroll";
import bgAnimation from "../../scripts/bgAnimation";
import { connect } from "react-redux";
import { scrollPage } from "../../Actions/actions";

class App extends React.Component {
  componentDidMount() {
    this.writeScrollValue(this.props.scroll);
  }

  writeScrollValue(delta = 0) {
    document.addEventListener("wheel", (e) => {
      this.props.scroll === 0 ? (delta = 0) : (delta = this.props.scroll);
      delta += e.deltaY || e.detail || e.wheelDelta;
      if (delta < 0) {
        delta = 0;
      } else if (delta >= 8000) {
        delta = 8000;
      }
      this.props.scrollPage(delta);
      bgAnimation(delta);
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

const mapStateToProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatchToProps = { scrollPage };

export default connect(mapStateToProps, mapDispatchToProps)(App);

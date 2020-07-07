import React from "react";
import "./menu-list.scss";

export default class MenuList extends React.Component {
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
      <div
        style={{
          top: this.state.delta / 10 + "px",
          left: this.state.delta / 10 + "px",
        }}
        id={"left-panel"}
      >
        {this.state.delta}
      </div>
    );
  }
}

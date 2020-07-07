import React from "react";
import "./App.scss";
import MenuList from "../MenuList";

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
        <div className="fog">
          <div></div>
        </div>
        <div id="app-window">
          <div
            style={{ transform: "rotate(" + this.state.delta / 150 + "deg)" }}
            className={"bg-item"}
          ></div>
          <div
            style={{ transform: "rotate(" + this.state.delta / 100 + "deg)" }}
            className={"bg-item"}
          ></div>
          <div
            style={{
              transform:
                "rotate(" + Math.sin(this.state.delta / 10000) * 200 + "deg)",
            }}
            className={"bg-item"}
          ></div>
          <MenuList />
        </div>
      </div>
    );
  }
}

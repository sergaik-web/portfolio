import React from "react";
import "./menu-list.scss";

export default class MenuList extends React.Component {
  componentDidMount() {
    let delta = 0;
    document.addEventListener("wheel", (e) => {
      delta += e.deltaY || e.detail || e.wheelDelta;
      console.log(delta);
    });
  }

  render() {
    return <div id={"left-panel"}></div>;
  }
}

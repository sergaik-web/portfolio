import React from "react";
import "./left-menu-list.scss";
import MenuListItem from "../menu-list-item";

export default class LeftMenuList extends React.Component {
  state = {
    items: ["ГЛАВНАЯ", "ТЕХНОЛОГИИ", "РАБОТЫ"],
  };

  render() {
    return (
      <nav id={"left-panel"}>
        <MenuListItem items={this.state.items} position="left" />
      </nav>
    );
  }
}

import React from "react";
import "./right-menu-list.scss";
import MenuListItem from "../menu-list-item";

export default class RightMenuList extends React.Component {
  state = {
    items: ["GIT", "ПРЕДЛОЖИТЬ РАБОТУ", "ЗАКАЗАТЬ САЙТ"],
  };
  render() {
    return (
      <nav id={"right-panel"}>
        <MenuListItem items={this.state.items} position="right" />
      </nav>
    );
  }
}

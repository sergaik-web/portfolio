import React from "react";
import "./menu-list.scss";
import MenuListItem from "../menu-list-item";

export default class MenuList extends React.Component {
  render() {
    return (
      <nav id={"left-panel"}>
        <MenuListItem />
      </nav>
    );
  }
}

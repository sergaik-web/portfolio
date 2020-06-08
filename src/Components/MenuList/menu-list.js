import React from "react";
import MenuListItem from "../MenuListItem";
import "./menu-list.scss";

export default class MenuList extends React.Component {
  render() {
    return (
      <ul className="menu-list">
        <MenuListItem />
      </ul>
    );
  }
}

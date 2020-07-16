import React from "react";
import "./menu-list-item.scss";

export default class MenuListItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="bg-menu-item" />
        <div className="bg-menu-item" />
        <div className={`bg-menu-item ${this.props.position}`} />
        <ul className="menu-list">
          <li className="menu-item">
            <span>{this.props.items[0]}</span>
          </li>
          <li className={`menu-item ${this.props.position}`}>
            <span>{this.props.items[1]}</span>
          </li>
          <li className="menu-item">
            <span>{this.props.items[2]}</span>
          </li>
        </ul>
      </>
    );
  }
}

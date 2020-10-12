import React from "react";
import "./menu-list-item.scss";

const MenuListItem = (props) => {
  return (
    <>
      <div className="bg-menu-item" />
      <div className="bg-menu-item" />
      <div className={`bg-menu-item ${props.position+'Center'}`} />
      <ul className="menu-list">
        <li className="menu-item">
          <span>{props.items[0]}</span>
        </li>
        <li className={`menu-item ${props.position+'Center'}`}>
          <span>{props.items[1]}</span>
        </li>
        <li className="menu-item">
          <span>{props.items[2]}</span>
        </li>
      </ul>
    </>
  );
};

export default MenuListItem;

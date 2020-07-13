import React from "react";
import "./menu-list-item.scss";

export default class MenuListItem extends React.Component {
  render() {
    return (
      <ul className="menu-list">
        <li className="menu-item">
          <span>ГЛАВНАЯ</span>
        </li>
        <li className="menu-item">
          <span>РАБОТЫ</span>
        </li>
        <li className="menu-item">
          <span>ТЕХНОЛОГИИ</span>
        </li>
        <li className="menu-item">
          <span>GIT</span>
        </li>
        <li className="menu-item">
          <span>ЗАКАЗАТЬ САЙТ</span>
        </li>
        <li className="menu-item">
          <span>ПРЕДЛОЖИТЬ РАБОТУ</span>
        </li>
      </ul>
    );
  }
}

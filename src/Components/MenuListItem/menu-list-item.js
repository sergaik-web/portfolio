import React from "react";
import "./menu-list-item.scss";

const MenuListItem = () => {
  const MenuItems = [
    { name: "Обо мне" },
    { name: "Мои работы" },
    { name: "Мои навыки" },
    { name: "Цены" },
    { name: "Контакты" },
  ];
  return MenuItems.map((e) => <li className={"menu-list-item"}>{e.name}</li>);
};

export default MenuListItem;

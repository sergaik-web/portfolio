import React from "react";
import "./right-menu-list.scss";
import MenuListItem from "../menu-list-item";

const RightMenuList = () => {
  const items = ["GIT", "ПРЕДЛОЖИТЬ РАБОТУ", "ЗАКАЗАТЬ САЙТ"];

  return (
    <nav id={"right-panel"}>
      <MenuListItem items={items} position="right" />
    </nav>
  );
};

export default RightMenuList;

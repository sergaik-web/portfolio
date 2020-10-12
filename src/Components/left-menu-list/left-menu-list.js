import React from "react";
import "./left-menu-list.scss";
import MenuListItem from "../menu-list-item";

const LeftMenuList = () => {
  const items = ["НАВЫКИ", "МОИ РАБОТЫ", "ОБО МНЕ"];

  return (
    <nav id={"left-panel"}>
      <MenuListItem items={items} position="left" />
    </nav>
  );
};

export default LeftMenuList;

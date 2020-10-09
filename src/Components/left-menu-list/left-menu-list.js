import React from "react";
import "./left-menu-list.scss";
import MenuListItem from "../menu-list-item";

const LeftMenuList = () => {
  const items = ["X-CHECK RSS", "SONG BIRDS", "КАНЦЛЕР ГРУПП"];

  return (
    <nav id={"left-panel"}>
      <MenuListItem items={items} position="left" />
    </nav>
  );
};

export default LeftMenuList;

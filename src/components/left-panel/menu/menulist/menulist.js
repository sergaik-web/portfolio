import React from "react";
import "./style.css";
import MenuListItem from "../menulistitem";

export default function Menulist() {
  return (
    <nav className={"nav"}>
      <ul className={"leftMenuList"}>
        <MenuListItem />
      </ul>
    </nav>
  );
}

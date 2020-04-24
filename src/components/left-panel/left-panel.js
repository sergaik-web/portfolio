import React from "react";
import Logo from "./logo";
import Menulist from "./menu/menulist";

export default function LeftPanel() {
  return (
    <aside className={"aside"}>
      <Logo />
      <Menulist />
    </aside>
  );
}

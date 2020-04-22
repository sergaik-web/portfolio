import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";

export default function LeftPanel() {
  return (
    <aside className={"aside"}>
      <Logo />
      <Navigation />
    </aside>
  );
}

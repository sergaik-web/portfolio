import React from "react";
import "./App.scss";
import MenuList from "../MenuList";

function App() {
  return (
    <div className="App">
      <div className="fog">
        <div></div>
      </div>
      <div id="app-window">
        <div className={"bg-item"}></div>
        <div className={"bg-item"}></div>
        <div className={"bg-item"}></div>
        <MenuList />
      </div>
    </div>
  );
}

export default App;

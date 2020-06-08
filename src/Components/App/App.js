import React from "react";
import "./App.scss";
import { test } from "../../Actions/actions";
import { connect } from "react-redux";
import MenuList from "../MenuList";

function App(state) {
  const text = state.text;

  return (
    <div className="App">
      <div className="fog">
        <div></div>
      </div>
      <div className="app-window">
        <MenuList />
      </div>
    </div>
  );
}

const mapDispatchToProps = { test };

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

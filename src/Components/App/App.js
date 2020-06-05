import React from "react";
import "./App.css";
import { test } from "../../Actions/actions";
import { connect } from "react-redux";

function App(state) {
  const text = state.text;

  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
        <input
          id={"input"}
          onChange={(event) => state.test(event.target.value)}
          type={"text"}
          placeholder={"введите текст"}
        />
        <button
          onClick={() =>
            state.test(document.getElementById("input").value + "123")
          }
        >
          Текст
        </button>
      </header>
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

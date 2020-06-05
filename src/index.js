import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { Provider } from "react-redux";
import ErrorBoundary from "./Components/ErrorBoundary";
import Store from "./Store";
import Services from "./Services";
import Context from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

const services = new Services();

ReactDOM.render(
  <Provider store={Store}>
    <ErrorBoundary>
      <Context.Provider value={services}>
        <Router>
          <App />
        </Router>
      </Context.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

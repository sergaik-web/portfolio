import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import MyService from "./services";
import MyContext from "./context";
import store from "./store";

import "./index.css";

const myService = new MyService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <MyContext.Provider value={myService}>
        <Router>
          <App />
        </Router>
      </MyContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

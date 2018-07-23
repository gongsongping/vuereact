import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import "./assets/fonts.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Router basename="/proj/cruise/build">
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

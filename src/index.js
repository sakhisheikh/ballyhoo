import "airbnb-js-shims";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Root from "./root";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();

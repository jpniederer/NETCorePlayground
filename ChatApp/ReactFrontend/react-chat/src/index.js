import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { requestRooms } from "./store/reducers/roomReducer";
import { requestMessages } from "./store/reducers/messageReducer";
import { userInfo } from "./store/reducers/userReducer";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const logger = createLogger();
const rootReducer = combineReducers({
  requestRooms,
  requestMessages,
  userInfo
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

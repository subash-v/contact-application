import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers/index.js";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Modal, ModalPanel } from "./components/common/modal/ModalRoot";
const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(rootReducer);
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store} history={history}>
    <BrowserRouter>
      <Modal>
        <App />
        <ModalPanel />
      </Modal>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();

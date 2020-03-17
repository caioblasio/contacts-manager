import React from "react";
import ReactDOM from "react-dom";
import Main from "containers/Main";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import configureStore, { history } from "store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

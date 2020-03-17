import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};
  if (ENVIRONMENT !== "production" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "Redux",
        realtime: true,
        trace: true,
        traceLimit: 25
      });
    }
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

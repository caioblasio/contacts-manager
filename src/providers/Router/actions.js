import { push as routePush, goBack } from "connected-react-router";

export function push(url) {
  return routePush(url);
}

export function back() {
  return goBack();
}

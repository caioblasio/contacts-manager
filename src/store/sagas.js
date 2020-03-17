import { all } from "redux-saga/effects";
import contactsSaga from "providers/Contacts/saga";

export default function*() {
  yield all([contactsSaga()]);
}

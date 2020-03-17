import { takeLatest, call, put } from "redux-saga/effects";
import fetchData from "utils/fetch";
import { FETCH_CONTACTS, CONTACTS_API_URL } from "./constants";
import {
  fetchContactsSuccess,
  fetchContactsFailure,
  fetchContactsWaiting
} from "./actions";

export function* fetchContacts() {
  yield put(fetchContactsWaiting());
  try {
    const data = yield call(fetchData, CONTACTS_API_URL);
    yield put(fetchContactsSuccess(data));
  } catch (err) {
    yield put(fetchContactsFailure(err.message));
  }
}

function* saga() {
  yield takeLatest(FETCH_CONTACTS, fetchContacts);
}

export default saga;

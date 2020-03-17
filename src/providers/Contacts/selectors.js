import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectState = ({ contacts }) => contacts || initialState;

const isWaiting = () =>
  createSelector(selectState, state => state.get("isWaiting"));
const getErrorMessage = () =>
  createSelector(selectState, state => state.get("error"));
const getData = () =>
  createSelector(selectState, state =>
    state
      .get("data")
      .map(entry => ({
        id: entry.get("id"),
        name: entry.get("name"),
        username: entry.get("username"),
        email: entry.get("email"),
        phone: entry.get("phone"),
        website: entry.get("website")
      }))
      .toJS()
  );

const getContact = id => {
  return createSelector(
    getData(),
    data => data.filter(entry => entry.id == id)[0]
  );
};

export { isWaiting, getErrorMessage, getData, getContact };

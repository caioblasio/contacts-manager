import { fromJS } from "immutable";
import {
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_WAITING,
  ADD_CONTACT,
  REMOVE_CONTACT,
} from "./constants";

export const initialState = fromJS({
  data: [],
  isWaiting: false,
  error: undefined,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CONTACTS_WAITING:
      return state.set("isWaiting", true);

    case FETCH_CONTACTS_SUCCESS:
      return state.set("isWaiting", false).set("data", fromJS(payload));

    case FETCH_CONTACTS_FAILURE:
      return state.set("isWaiting", false).set("error", payload);

    case ADD_CONTACT:
      return state.set("data", state.get("data").push(fromJS(payload)));

    case REMOVE_CONTACT:
      return state.set(
        "data",
        state.get("data").filter((s) => s.get("id") !== payload)
      );

    default:
      return state;
  }
};

export default reducer;

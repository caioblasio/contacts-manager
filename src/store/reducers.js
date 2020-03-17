import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router/immutable";
import contactsReducer from "providers/Contacts/reducer";

const createRootReducer = history =>
  combineReducers({
    contacts: contactsReducer,
    router: connectRouter(history)
  });
export default createRootReducer;

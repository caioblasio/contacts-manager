const contactsState = require("providers/Contacts/reducer").initialState;

const history = require("history").createBrowserHistory();
const configureStore = require("store").default;

const rootState = {
  contacts: contactsState
};

const store = configureStore(rootState);

module.exports = store;

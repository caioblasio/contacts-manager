import { runSaga } from "redux-saga";
import { fetchContacts as fetchContactsAPI } from "../saga";
import { fetchContacts, fetchContactsWaiting } from "../actions";

describe("Given Contacts saga", () => {
  let recordSaga;
  let nextActions;

  beforeAll(() => {
    recordSaga = (saga, action) => {
      nextActions = [];

      runSaga(
        {
          dispatch: newAction => nextActions.push(newAction)
        },
        saga,
        action
      );
    };
  });

  describe("When fetchContacts is called", () => {
    beforeEach(() => {
      recordSaga(fetchContactsAPI, fetchContacts);
    });

    it("And should have next actions", () => {
      expect(nextActions.length).toBeGreaterThanOrEqual(1);
    });

    it("And should have a fetchContactsWaiting", () => {
      expect(nextActions).toContainEqual(fetchContactsWaiting());
    });
  });
});

import { fromJS } from "immutable";
import { NULL_ACTION } from "providers/__mocks__/actions";
import contactsReducer, { initialState } from "../reducer";
import {
  fetchContactsWaiting,
  fetchContactsFailure,
  fetchContactsSuccess,
  addContact
} from "../actions";

describe("Given contactsReducer", () => {
  describe("When initializes", () => {
    it("Then should have an initial state", () => {
      expect(contactsReducer(undefined, NULL_ACTION)).toEqual(initialState);
    });
  });

  describe("And receives a fetchContactsSuccess action", () => {
    it("Then should update data", () => {
      let data = [{ test: "testing", testAgain: "testing again" }];
      const action = fetchContactsSuccess(data);
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("data", fromJS(data))
      );
    });

    it("And should update isWaiting", () => {
      const action = fetchContactsSuccess();
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("isWaiting", false)
      );
    });

    it("And should update error", () => {
      const action = fetchContactsSuccess();
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("error", undefined)
      );
    });
  });

  describe("And receives a fetchContactsWaiting action", () => {
    it("Then should update isWaiting", () => {
      const action = fetchContactsWaiting();
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("isWaiting", true)
      );
    });
  });

  describe("And receives a fetchContactsFailure action", () => {
    it("Then should update error", () => {
      let error = "Ups... Something went wrong again!";
      const action = fetchContactsFailure(error);
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("error", error)
      );
    });

    it("And should update isWaiting", () => {
      const action = fetchContactsFailure();
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("isWaiting", false)
      );
    });
  });

  describe("And receives a addContact action", () => {
    it("Then should add contact", () => {
      let data = { test: "testing" };
      const action = addContact(data);
      expect(contactsReducer(initialState, action)).toEqual(
        initialState.set("data", initialState.get("data").push(fromJS(data)))
      );
    });
  });
});

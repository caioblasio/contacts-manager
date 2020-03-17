import {
  fetchContacts,
  fetchContactsWaiting,
  fetchContactsFailure,
  fetchContactsSuccess,
  addContact
} from "../actions";
import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_WAITING,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_CONTACT
} from "../constants";

describe("Given Contacts Action", () => {
  describe("When fetchContacts is called", () => {
    it("Then should create a fetchContacts action", () => {
      const action = {
        type: FETCH_CONTACTS
      };

      expect(fetchContacts()).toEqual(action);
    });
  });

  describe("When fetchContactsSuccess is called without arguments", () => {
    it("Then should create a fetchContactsSuccess action", () => {
      const action = {
        type: FETCH_CONTACTS_SUCCESS,
        payload: []
      };

      expect(fetchContactsSuccess()).toEqual(action);
    });
  });

  describe("When fetchContactsSuccess is called with arguments", () => {
    let data;
    beforeEach(() => {
      data = [{ test: "testing" }, { testAgain: "testing again" }];
    });

    it("Then should create a fetchContactsSuccess action", () => {
      const action = {
        type: FETCH_CONTACTS_SUCCESS,
        payload: data
      };

      expect(fetchContactsSuccess(data)).toEqual(action);
    });
  });

  describe("When fetchContactsFailure is called without arguments", () => {
    it("Then should create a fetchContactsFailure action", () => {
      const action = {
        type: FETCH_CONTACTS_FAILURE
      };

      expect(fetchContactsFailure()).toEqual(action);
    });
  });

  describe("When fetchContactsFailure is called with arguments", () => {
    let error;
    beforeEach(() => {
      error = "Ups... Something went wrong.";
    });

    it("Then should create a fetchContactsFailure action", () => {
      const action = {
        type: FETCH_CONTACTS_FAILURE,
        payload: error
      };

      expect(fetchContactsFailure(error)).toEqual(action);
    });
  });

  describe("When fetchContactsWaiting is called", () => {
    it("Then should create a fetchContactsWaiting action", () => {
      const action = {
        type: FETCH_CONTACTS_WAITING
      };

      expect(fetchContactsWaiting()).toEqual(action);
    });
  });

  describe("When addContact is called without arguments", () => {
    it("Then should create a addContact action", () => {
      const action = {
        type: ADD_CONTACT,
        payload: {}
      };

      expect(addContact()).toEqual(action);
    });
  });

  describe("When addContact is called with arguments", () => {
    let data;
    beforeEach(() => {
      data = { test: "testing" };
    });

    it("Then should create a addContact action", () => {
      const action = {
        type: ADD_CONTACT,
        payload: data
      };

      expect(addContact(data)).toEqual(action);
    });
  });
});

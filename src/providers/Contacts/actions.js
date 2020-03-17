import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_WAITING,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT
} from "./constants";

export function fetchContacts() {
  return {
    type: FETCH_CONTACTS
  };
}

export function fetchContactsWaiting() {
  return {
    type: FETCH_CONTACTS_WAITING
  };
}

export function fetchContactsSuccess(data = []) {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: data
  };
}

export function fetchContactsFailure(message) {
  return {
    type: FETCH_CONTACTS_FAILURE,
    payload: message
  };
}

export function addContact(data = {}) {
  return {
    type: ADD_CONTACT,
    payload: data
  };
}

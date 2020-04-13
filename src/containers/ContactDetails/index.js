import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getContact } from "providers/Contacts/selectors";
import ContactDetails from "components/ContactDetails";

export const Container = ({ contact }) => {
  return contact ? (
    <ContactDetails contact={contact} />
  ) : (
    "Contact not found! :("
  );
};

const mapStateToProps = (_state, { id }) => {
  return createStructuredSelector({
    contact: getContact(id),
  });
};

Container.propTypes = {
  contact: PropTypes.object,
};

export default connect(mapStateToProps)(Container);

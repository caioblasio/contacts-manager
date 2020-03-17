import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewContact from "components/NewContact";
import { addContact } from "providers/Contacts/actions";
import { push } from "providers/Router/actions";

export const Container = props => {
  return <NewContact {...props} />;
};

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  routePush: url => dispatch(push(url))
});

Container.propTypes = {
  addContact: PropTypes.func.isRequired,
  routePush: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Container);

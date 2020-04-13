import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getData, isWaiting } from "providers/Contacts/selectors";
import { deleteContact } from "providers/Contacts/actions";
import ContactList from "components/ContactList";

export const Container = (props) => {
  return <ContactList {...props} />;
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
  isLoading: isWaiting(),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

Container.propTypes = {
  data: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getData } from "providers/Contacts/selectors";
import ContactList from "components/ContactList";

export const Container = props => {
  return <ContactList {...props} />;
};

const mapStateToProps = createStructuredSelector({
  data: getData()
});

Container.propTypes = {
  data: PropTypes.array
};

export default connect(mapStateToProps)(Container);

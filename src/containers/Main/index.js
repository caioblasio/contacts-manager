import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "pages/Home";
import Details from "pages/Details";
import New from "pages/New";
import Topbar from "components/Topbar";
import { fetchContacts } from "providers/Contacts/actions";

export const Container = ({ fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  });
  return (
    <main className="main">
      <CssBaseline />
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/contact/:id"
          render={props => <Details contactId={props.match.params.id} />}
        />
        <Route exact path="/new" component={New} />
      </Switch>
    </main>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  };
}

Container.propTypes = {
  fetchContacts: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Container);

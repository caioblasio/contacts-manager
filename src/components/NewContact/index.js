import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./styles";
import Form from "./Form";

const NewContact = ({ addContact, routePush }) => {
  const onFormSubmit = values => {
    addContact(values);
    routePush("/");
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Form onFormSubmit={onFormSubmit} />
      </CardContent>
    </Card>
  );
};

NewContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  routePush: PropTypes.func.isRequired
};

export default NewContact;

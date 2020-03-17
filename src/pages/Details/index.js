import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { back } from "providers/Router/actions";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ContactDetails from "containers/ContactDetails";
import ContactList from "containers/ContactList";
import useStyles from "./styles";

export const Details = ({ contactId, back }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.back} onClick={back}>
        <ArrowBackIosIcon />
        <Typography variant="h6" component="span">
          Back
        </Typography>
      </div>
      <section className={classes.content}>
        <section className={classes.list}>
          <ContactList shortView isScrollable />
        </section>
        <section className={classes.details}>
          <Typography variant="h6" component="h1" className={classes.title}>
            Contact Details
          </Typography>
          <ContactDetails id={contactId} key={contactId} />
        </section>
      </section>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back())
});

Details.propTypes = {
  back: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Details);

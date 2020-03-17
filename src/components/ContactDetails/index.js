import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HttpIcon from "@material-ui/icons/Http";
import useStyles from "./styles";

const ContactDetails = ({ contact }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.head}>
          <Avatar className={classes.avatar}>
            {contact.name.split("")[0].toUpperCase()}
          </Avatar>
          <Typography className={classes.title} variant="h4" component="h3">
            {contact.name}
          </Typography>
        </div>
        <Divider />
        <div className={classes.content}>
          <Typography color="textSecondary">ID: {contact.id}</Typography>
          <div className={classes.info}>
            <AccountCircleIcon />
            <Typography variant="body2" component="p">
              {contact.username}
            </Typography>
          </div>
          <div className={classes.info}>
            <EmailIcon />
            <Typography variant="body2" component="p">
              {contact.email}
            </Typography>
          </div>
          <div className={classes.info}>
            <PhoneIcon />
            <Typography variant="body2" component="p">
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </Typography>
          </div>
          <div className={classes.info}>
            <HttpIcon />
            <Typography variant="body2" component="p">
              <a href={`//${contact.website}`} target="_blank">
                {contact.website}
              </a>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ContactDetails.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactDetails;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import useStyles from "./styles";

const ContactsList = ({ data, shortView, isScrollable }) => {
  const classes = useStyles();

  return (
    <section {...(isScrollable ? { className: classes.root } : {})}>
      {data.map((contact, index) => (
        <React.Fragment key={contact.id}>
          <Card>
            <CardActionArea component={Link} to={`/contact/${contact.id}`}>
              <CardContent className={classes.card}>
                <div className={classes.avatar}>
                  <Avatar>{contact.name.split("")[0].toUpperCase()}</Avatar>
                </div>
                <div className={classes.content}>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.flexBig}
                  >
                    {contact.name}
                  </Typography>
                  {!shortView && (
                    <>
                      <Typography
                        variant="body1"
                        component="p"
                        className={classes.flexBig}
                      >
                        {contact.email}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        className={classes.flexBig}
                      >
                        {contact.phone}
                      </Typography>
                    </>
                  )}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
          {index !== data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  );
};

ContactsList.defaultProps = {
  shortView: false,
  isScrollable: false
};

ContactsList.propTypes = {
  data: PropTypes.array,
  shortView: PropTypes.bool,
  isScrollable: PropTypes.bool
};

export default ContactsList;

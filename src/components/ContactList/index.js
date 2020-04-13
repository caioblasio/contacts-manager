import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import useStyles from "./styles";

const ContactsList = ({
  data,
  deleteContact,
  shortView,
  isLoading,
  isScrollable,
  isRemovable,
}) => {
  const classes = useStyles();

  const onRemoveContact = (id) => (event) => {
    event.preventDefault();
    deleteContact(id);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <section
      className={classnames(`${classes.root}`, {
        [`${classes.scrollable}`]: isScrollable,
      })}
    >
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
                {isRemovable && (
                  <IconButton
                    component="button"
                    onClick={onRemoveContact(contact.id)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                )}
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
  isScrollable: false,
  isRemovable: true,
};

ContactsList.propTypes = {
  data: PropTypes.array,
  shortView: PropTypes.bool,
  isScrollable: PropTypes.bool,
};

export default ContactsList;

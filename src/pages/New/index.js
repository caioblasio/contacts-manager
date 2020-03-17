import React from "react";
import NewContact from "containers/NewContact";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const New = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h6" component="h1" className={classes.title}>
        New Contact
      </Typography>
      <NewContact />
    </section>
  );
};
export default New;

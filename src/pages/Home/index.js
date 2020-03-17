import React from "react";
import ContactList from "containers/ContactList";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h6" component="h1" className={classes.title}>
        All Contacts
      </Typography>
      <ContactList />
      <Link to="/new" style={{ textDecoration: "none", color: "inherit" }}>
        <Fab color="primary" aria-label="add" className={classes.floatButton}>
          <AddIcon />
        </Fab>
      </Link>
    </section>
  );
};
export default Home;

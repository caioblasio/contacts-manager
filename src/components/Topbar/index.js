import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Topbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="h6">Contacts Manager</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Topbar;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  content: {
    display: "flex"
  },
  list: {
    flex: "1 0 0",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  details: {
    flex: "2 0 0",
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4)
    }
  },
  back: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

export default useStyles;

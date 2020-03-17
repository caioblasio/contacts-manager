import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      margin: "0 auto"
    }
  },
  title: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
}));

export default useStyles;

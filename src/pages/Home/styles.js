import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingLeft: 0,
    paddingRight: 0
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
  },
  floatButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export default useStyles;

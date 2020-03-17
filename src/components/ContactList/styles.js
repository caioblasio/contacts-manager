import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: "scroll",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
  },
  card: {
    display: "flex"
  },
  avatar: { marginRight: theme.spacing(4) },
  content: {
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      "& > *": {
        flex: "1 0 0"
      }
    }
  }
}));

export default useStyles;

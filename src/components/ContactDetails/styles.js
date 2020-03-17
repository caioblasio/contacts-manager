import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  head: {
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(4)
  },
  content: {
    paddingTop: theme.spacing(2)
  },
  info: {
    display: "flex",
    marginTop: theme.spacing(2),
    alignItems: "center",
    "& :first-child": {
      marginRight: theme.spacing(2)
    }
  }
}));

export default useStyles;

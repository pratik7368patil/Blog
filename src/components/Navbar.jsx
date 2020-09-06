import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  },
  navBackground: {
    background: "white",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.navBackground}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Awesome Blog
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Recent Blogs</Button>
          <Button color="inherit">Contribute</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

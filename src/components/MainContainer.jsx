import React from "react";
import Grid from "@material-ui/core/Grid";
import MainHead from "./MainHead";
import Trendings from "./Trendings";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    height: "88%",
    marginTop: "30px",
  },
  mainDiv: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
  },
  trendingDiv: {
    padding: "40px 40px 10px 40px",
  },
}));

const MainContainer = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item sm={12} md={6} className={classes.mainDiv}>
        <MainHead />
      </Grid>
      <Grid item sm={12} md={6} className={classes.trendingDiv}>
        <Trendings />
      </Grid>
    </Grid>
  );
};

export default MainContainer;

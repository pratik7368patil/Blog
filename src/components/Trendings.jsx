import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TrendCard from "./TrendCard";

const useStyle = makeStyles((theme) => ({
  trendHead: {
    padding: "30px 20px 20px 20px",
    position: "relative",
  },
  mainHead: {
    fontWeight: "bold",
  },
  dash: {
    position: "absolute",
    marginTop: "20px",
    height: "5px",
    width: "80px",
    borderRadius: "10px",
    top: 0,
    background: "#6673EB",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  },
  allCards: {
    marginTop: "10px",
    paddingBottom: "20px",
    padding: "0px 20px 0px 20px",
  },
}));

const Trendings = () => {
  const classes = useStyle();
  return (
    <Paper variant="outlined">
      <div className={classes.trendHead}>
        <Typography variant="h5" className={classes.mainHead} gutterBottom>
          Trending Blogs
        </Typography>
        <div className={classes.dash}></div>
      </div>
      <div className={classes.allCards}>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </Paper>
  );
};

export default Trendings;

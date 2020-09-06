import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  paperMain: {
    marginBottom: "10px",
  },
  trendCardMainContainer: {
    padding: "5px 0px 0px 20px",
  },
  trendCardHead: {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "5px 5px 5px 5px",
  },
  trendCardPara: {
    color: "gray",
    padding: "5px 5px 5px 5px",
  },
  customBtnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  customBtn: {
    margin: "0px 10px 10px 0px",
    color: "white",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#1b1b1b",
    "&:hover": {
      color: "black",
      backgroundColor: "lightgray",
    },
  },
}));

const TrendCard = () => {
  const classes = useStyle();
  return (
    <Paper variant="outlined" className={classes.paperMain}>
      <div className={classes.trendCardMainContainer}>
        <Typography className={classes.trendCardHead}>
          About Something That I Don’t Know
        </Typography>
        <Typography className={classes.trendCardPara}>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </Typography>
      </div>
      <div className={classes.customBtnContainer}>
        <Button
          size="small"
          variant="contained"
          disableElevation
          className={classes.customBtn}
        >
          Read More
        </Button>
      </div>
    </Paper>
  );
};

export default TrendCard;

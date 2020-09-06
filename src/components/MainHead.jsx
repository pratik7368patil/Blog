import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  mainPara: {
    color: "rgba(0,0,0,0.6)",
    marginTop: "25px",
  },
  customBtn: {
    marginTop: "25px",
    color: "#1b1b1b",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "lightgray",
    },
  },
  customImage: {
    position: "absolute",
    marginTop: "-20px",
    marginLeft: "-60px",
    top: 0,
    left: 0,
    zIndex: "-10",
  },
}));

const MainHead = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h3">
        Velit officia consequat duis enim velit mollit.
      </Typography>
      <Typography variant="h5" className={classes.mainPara}>
        Exercitation veniam consequat sunt nostrud amet.
      </Typography>
      <Button
        size="large"
        variant="contained"
        disableElevation
        classes={{ root: classes.customBtn }}
      >
        Explore Trendings
      </Button>
    </div>
  );
};

export default MainHead;

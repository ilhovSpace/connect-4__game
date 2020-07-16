import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cell: {
    display: "inline-block",
    width: "calc(405px / 7)",
    height: "calc(405px / 7)",
    background: "white",
    borderRadius: "50%",
    margin: "3px",
    boxSizing: "border-box",
    cursor: "pointer",
    textAlign: "center",
  },
  playerOne: {
    background: "yellow",
  },
  playerTwo: {
    background: "red",
  },
});

export default useStyles;

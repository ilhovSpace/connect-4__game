import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  board: {
    backgroundImage:
      "linear-gradient(to top, #051937, #133760, #1d588d, #1f7cbb, #12a2eb)",
    width: "450px",
    margin: "auto",
  },
  action: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& button": {
      marginTop: "20px",
    },
    "& a": {
      textDecoration: "none",
      color: "#fff",
      "& button": {
        width: "100%",
      },
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default useStyles;

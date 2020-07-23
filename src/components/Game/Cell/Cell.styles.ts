import { makeStyles } from "@material-ui/core/styles";

interface Props {
  cellColor: string;
  animationColor: string;
  delay: number;
}

const useStyles = makeStyles({
  cell: {
    display: "inline-block",
    width: "calc(405px / 7)",
    height: "calc(405px / 7)",
    background: (props: Props) => `${props.cellColor}`,
    borderRadius: "50%",
    margin: "3px",
    boxSizing: "border-box",
    cursor: "pointer",
    textAlign: "center",
    overflow: "hidden",
  },

  fallAnimation: {
    position: "relative",
    width: "calc(405px / 7)",
    height: "calc(405px / 7)",
    borderRadius: "50%",
    top: "-58px",
    background: (props: Props) => `${props.animationColor}`,
    animation: "$animationfall .54s linear",
    animationDelay: (props: Props) => `${props.delay}s`,
  },
  "@keyframes animationfall": {
    from: {
      top: "-58px",
    },
    to: {
      top: "58px",
    },
  },
  ariseAnimation: {
    position: "relative",
    width: "calc(410px / 7)",
    height: "calc(410px / 7)",
    borderRadius: "50%",
    top: "0px",
    background: (props: Props) => `${props.animationColor}`,
    animation: "$animationArise .5s",
    animationDelay: (props: Props) => `${props.delay}s`,
    animationFillMode: "both",
  },
  "@keyframes animationArise": {
    from: {
      top: "-60px",
    },
    to: {
      top: "0px",
    },
  },

  fallAnimationGold: {
    position: "relative",
    width: "calc(405px / 7)",
    height: "calc(405px / 7)",
    borderRadius: "50%",
    top: "-58px",
    background: "gold",
    animation: "$animationfallgold .54s linear",
    animationDelay: (props: Props) => `${props.delay}s`,
  },
  "@keyframes animationfallgold": {
    from: {
      top: "-58px",
    },
    to: {
      top: "58px",
    },
  },
  fallAnimationRed: {
    position: "relative",
    width: "calc(405px / 7)",
    height: "calc(405px / 7)",
    borderRadius: "50%",
    top: "-58px",
    background: "red",
    animation: "$animationfallred .54s linear",
    animationDelay: (props: Props) => `${props.delay}s`,
  },
  "@keyframes animationfallred": {
    from: {
      top: "-58px",
    },
    to: {
      top: "58px",
    },
  },
});

export default useStyles;

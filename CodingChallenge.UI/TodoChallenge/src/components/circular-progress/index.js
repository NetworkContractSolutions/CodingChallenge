import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

//styles
import styles from "./styles.module.scss";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ value, maxValue }) => (
  <div className={styles.progress}>
    <p className={styles["progress__not-done"]}>Not done</p>
    <CircularProgressbar
      value={value}
      maxValue={maxValue}
      strokeWidth={20}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathColor: "blue",
        trailColor: "rgb(0, 184, 92)",
      })}
    />
    <p className={styles["progress__done"]}>Done</p>
  </div>
);

export default CircularProgressBar;

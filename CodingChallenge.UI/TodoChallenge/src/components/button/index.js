import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({ children, className, type, ...buttonProps }) => (
  <button
    {...buttonProps}
    className={classNames(className, styles["btn--default"], {
      [styles["btn--base"]]: type === "base",
    })}
  >
    {children}
  </button>
);

export default Button;

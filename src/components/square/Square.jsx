import styles from "./square.module.scss";
import cn from "classnames";

export default function Square({ num, color, setTotalHandler }) {
  return (
    <div className={cn(styles["square"], styles[`square--${color}`])} onClick={() => setTotalHandler(num)}>
      {num}
    </div>
  );
}

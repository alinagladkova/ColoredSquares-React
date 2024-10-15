import { useState } from "react";
import styles from "./square.module.scss";
import cn from "classnames";

export default function Square({ num, color, handler }) {
  const [clickNum, setClickNum] = useState(0);

  const clickAction = () => {
    handler(num);
    setClickNum(clickNum + 1);
  };

  return (
    <div className={cn(styles["square"], styles[`square--${color}`])} onClick={clickAction}>
      <span className={cn(styles["square__number"])}>{num}</span>
      <span className={cn(styles["square__text"])}> {clickNum}</span>
    </div>
  );
}

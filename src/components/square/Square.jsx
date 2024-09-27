import { useState } from "react";
import styles from "./square.module.scss";
import cn from "classnames";

export default function Square({ num, color, setTotalHandler, setClickNumHandler }) {
  const [clickNum, setClickNum] = useState(0);

  const setStateClickNum = () => {
    setClickNum(clickNum + 1);
  };

  const clickAction = () => {
    setTotalHandler(num);
    setStateClickNum();
    setClickNumHandler(clickNum);
  };

  return (
    <div className={cn(styles["square"], styles[`square--${color}`])} onClick={clickAction}>
      <span className={cn(styles["square__number"])}>{num}</span>
      <span className={cn(styles["square__text"])}> {clickNum}</span>
    </div>
  );
}

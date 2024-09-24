import { useState } from "react";
import Square from "../square/Square";
import styles from "./squaresList.module.scss";
import cn from "classnames";
import Button from "../button/Button";

export default function SquaresList({ data }) {
  const [total, setTotal] = useState(0);

  const setTotalHandler = (num) => {
    setTotal(total + num);
  };

  const setResetHandler = () => {
    setTotal(0);
  };

  return (
    <div className={cn(styles["squares-list"])}>
      <span className={cn(styles["squares-list__total"])}>total: {total}</span>
      <div className={cn(styles["squares-list__control"])}>
        <Button text="reset" use="warning" handler={setResetHandler}></Button>
        <Button text="mix" use="normal" handler={() => {}}></Button>
        <Button text="sort by asc" use="normal" handler={() => {}}></Button>
        <Button text="sort by desc" use="normal" handler={() => {}}></Button>
      </div>
      <div className={cn(styles["squares-list__wrapper"])}>
        {data.map((square) => (
          <Square key={square.id} num={square.num} color={square.color} setTotalHandler={setTotalHandler}></Square>
        ))}
      </div>
    </div>
  );
}

/* 

ДЗ:

оживить:
кнопка сброс total ++
кнопка перемешать квадратики (загуглить javascript array shake )
кнопка сортировка больше меньше

нужно чуток доверстать квадратик (добавить еще число) число будет считать кол-во кликов на конкретный квадратик
сделать отдельный компонент: SquaresGroups -> reds: 3, greens: 2, blue: 5


*/

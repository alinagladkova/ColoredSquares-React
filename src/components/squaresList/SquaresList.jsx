import { useState } from "react";
import Square from "../square/Square";
import styles from "./squaresList.module.scss";
import cn from "classnames";
import Button from "../button/Button";
import SquaresGroup from "../squaresGroups/SquaresGroups";

export default function SquaresList({ data }) {
  const [total, setTotal] = useState(0);
  const [newData, setNewData] = useState(data);
  const [clickNum, setClickNum] = useState(0);

  const setTotalHandler = (num) => {
    setTotal(total + num);
  };

  const setResetHandler = () => {
    setTotal(0);
  };

  const setClickNumHandler = (clickNum) => {
    clickNum = 0;
  };

  const setShuffleHandler = () => {
    setNewData([...newData].sort(() => Math.random() - 0.5)); //!! еще раз объяснить про spread
  };

  const setSortAscHandler = () => {
    setNewData([...newData].sort((a, b) => a.num - b.num));
  };

  const setSortDescHandler = () => {
    setNewData([...newData].sort((a, b) => b.num - a.num));
  };

  return (
    <div className={cn(styles["squares-list"])}>
      <span className={cn(styles["squares-list__total"])}>Total: {total}</span>
      <div className={cn(styles["squares-list__control"])}>
        <Button text="Reset" use="reset" handler={setResetHandler}></Button>
        <Button text="Shuffle" use="shuffle" handler={setShuffleHandler}></Button>
        <Button text="Sort by asc" use="sortAsc" handler={setSortAscHandler}></Button>
        <Button text="Sort by desc" use="sortDesc" handler={setSortDescHandler}></Button>
      </div>
      <div className={cn(styles["squares-list__wrapper"])}>
        {newData.map((square) => (
          //
          <Square key={square.id} num={square.num} color={square.color} setTotalHandler={setTotalHandler} setClickNumHandler={setClickNumHandler}></Square>
        ))}
      </div>
      <SquaresGroup data={data}></SquaresGroup>
    </div>
  );
}

/* 

ДЗ:

оживить:
кнопка сброс total +
кнопка перемешать квадратики (загуглить javascript array shake )  shuffle(arr); ++
кнопка сортировка больше меньше ++

нужно чуток доверстать квадратик (добавить еще число) число будет считать кол-во кликов на конкретный квадратик
сделать отдельный компонент: SquaresGroups -> reds: 3, greens: 2, blue: 5


*/

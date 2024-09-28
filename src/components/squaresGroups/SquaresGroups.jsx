import styles from "./squaresGroups.module.scss";
import cn from "classnames";

export default function SquaresGroup({ data }) {
  const setColorsArray = () => {
    return data.map((square) => square.color).filter((value, i, arr) => arr.indexOf(value) === i);
  };

  const setColorsAmountArray = () => {
    return data
      .map((square) => square.color)
      .forEach((value, i, arr) => {
        let a = 0;
        // arr.indexOf(value) === i ? a++ : "";

        //надо свести к одной цифре reduce
        if (arr.indexOf(value) === i) {
          console.log(a);
          a++;
        }
      });
    console.log(data.map((square) => square.color));
  };

  //если value равны, то какой-то номер увеличиваем

  return (
    <div className={cn(styles["squares-groups"])}>
      <ul className={cn(styles["squares-groups__list"])}>
        {setColorsArray().map((color) => (
          <li className={cn(styles["squares-groups__color-type"])} key={color}>
            {[`${color.slice(0, 1).toUpperCase()}${color.slice(1)}`]}: {console.log(setColorsAmountArray())}
          </li>
        ))}
      </ul>
    </div>
  );
}

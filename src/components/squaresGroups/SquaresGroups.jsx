import styles from "./squaresGroups.module.scss";
import cn from "classnames";

export default function SquaresGroup({ data }) {
  const setColorsArray = () => {
    return data.map((square) => square.color).filter((value, i, arr) => arr.indexOf(value) === i);
  };

  const setColorsAmountArray = () => {
    return data
      .map((square) => square.color)
      .reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i] = 1;
        }
        return acc;
      }, {});
  };

  return (
    <div className={cn(styles["squares-groups"])}>
      <ul className={cn(styles["squares-groups__list"])}>
        {setColorsArray().map((color) => (
          <li className={cn(styles["squares-groups__color-type"])} key={color}>
            {[`${color.slice(0, 1).toUpperCase()}${color.slice(1)}`]}: {setColorsAmountArray()[color]}
          </li>
        ))}
      </ul>
    </div>
  );
}

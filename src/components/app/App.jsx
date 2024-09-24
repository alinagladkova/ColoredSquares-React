import SquaresList from "../squaresList/SquaresList";

const data = [
  {
    id: 352432,
    num: 10,
    color: "red",
  },
  {
    id: 546,
    num: 10342,
    color: "green",
  },
  {
    id: 56,
    num: 56,
    color: "blue",
  },
  {
    id: 13,
    num: 67,
    color: "red",
  },
  {
    id: 567,
    num: 7,
    color: "green",
  },
  {
    id: 23,
    num: 325,
    color: "green",
  },
  {
    id: 768,
    num: 46,
    color: "red",
  },
  {
    id: 46,
    num: 107,
    color: "blue",
  },
  {
    id: 89,
    num: 435,
    color: "red",
  },
];

export default function App() {
  return <SquaresList data={data}></SquaresList>;
}

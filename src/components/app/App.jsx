import SquaresList from "../squaresList/SquaresList";

const data = [
  {
    id: 352432,
    num: 10,
    color: "violet",
  },
  {
    id: 546,
    num: 10342,
    color: "purple",
  },
  {
    id: 56,
    num: 56,
    color: "orchid",
  },
  {
    id: 13,
    num: 67,
    color: "violet",
  },
  {
    id: 567,
    num: 7,
    color: "purple",
  },
  {
    id: 23,
    num: 325,
    color: "purple",
  },
  {
    id: 768,
    num: 46,
    color: "violet",
  },
  {
    id: 46,
    num: 107,
    color: "orchid",
  },
  {
    id: 89,
    num: 435,
    color: "violet",
  },
];

export default function App() {
  return <SquaresList data={data}></SquaresList>;
}

import { useState } from "react";

export default function Likes() {
  const [color, Setcolor] = useState(true);
  const [count, setCount] = useState(0);
  const changeColor = () => {
    Setcolor((prev) => !prev);
    setCount((prev) => (prev === 0 ? 1 : 0));
  };
  const Currentcolor = color ? "red" : "grey";
  return (
    <>
      <h1>Like</h1>
      <button onClick={() => changeColor()} className="">
        Click me
      </button>

      <p style={{ color: Currentcolor }}>likes:{count}</p>
    </>
  );
}

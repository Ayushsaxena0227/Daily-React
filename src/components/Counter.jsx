import { useState } from "react";

// Build a counter that starts at 10 and decreases by 1 each click until 0, then disables the button.
export default function Counter() {
  const [count, Setcount] = useState(10);
  const handleCLick = () => {
    Setcount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Coutner</h1>
      <p>count:{count}</p>
      <button onClick={handleCLick} disabled={count === 0}>
        decrese me
      </button>
    </>
  );
}

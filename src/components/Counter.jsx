import { useState } from "react";

// Build a counter that increments and resets to 0 after it reaches 5.
export default function Counter() {
  const [count, Setcount] = useState(0);
  return (
    <>
      <h2>Counter</h2>
      <button onClick={Setcount(count + 1)}>Increase</button>
      <p>count</p>
    </>
  );
}

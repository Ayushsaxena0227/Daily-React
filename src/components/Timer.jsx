import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const id = setInterval(() => setCount((c) => c + 1), 1000);
    // const id = setInterval(() => {
    //   setCount((c) => c + 1);
    // }, 1000);

    return () => {
      clearInterval(id); // 🧼 Clean up interval
      console.log("Timer stopped");
    };
  }, []); // run once

  return <h2>Seconds: {count}</h2>;
}

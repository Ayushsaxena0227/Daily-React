import { useEffect, useState } from "react";

export default function Cleanup() {
  const [blue, Setcolor] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      Setcolor((prev) => !prev);
    }, 2000);
    return () => clearInterval(intervalId);
  });
  const bgcolor = blue ? "lightblue" : "lightgreen";
  return (
    <div>
      <div
        style={{
          backgroundColor: bgcolor,
        }}
      ></div>
      <h2>color:{bgcolor}</h2>
    </div>
  );
}

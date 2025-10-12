import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [currtime, setcurrtime] = useState(0);
  const [running, setisrunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setcurrtime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handlestart = () => {
    setisrunning((prev) => !prev);
  };
  const handlereset = () => {
    setisrunning(false);
    setcurrtime(0);
  };
  const formatTime = () => {
    const minutes = Math.floor(currtime / 60);
    const seconds = currtime % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <button onClick={handlestart}>{running ? "Pause" : "Start"}</button>
      <button onClick={handlereset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

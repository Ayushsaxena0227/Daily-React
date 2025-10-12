import React, { useEffect, useState } from "react";

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [time, setTime] = useState(new Date());
  const formatteddate = time.toLocaleDateString();
  const formattedtime = time.toLocaleTimeString("en-US");
  return (
    <div>
      <h2>Real time Clock</h2>
      <h3>Current Date:{formatteddate}</h3>
      <h3>currnt time: {formattedtime}</h3>
      <button>change clock</button>
    </div>
  );
};
export default Clock;

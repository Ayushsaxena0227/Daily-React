import { useState } from "react";

export default function Timer() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <h2>Timer</h2>
      <button onClick={handleClick}>Click Me</button>

      {/* Conditionally render message */}
      {show && <p style={{ color: "green" }}>Hey brother!</p>}
    </>
  );
}

import { useState } from "react";

// A toggle button that shows/hides a paragraph
export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      <h1>Toggle</h1>
      {isVisible && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
          dolore?
        </p>
      )}
      <button onClick={handleClick}>{isVisible ? "Hide" : "Show"}</button>
    </>
  );
}

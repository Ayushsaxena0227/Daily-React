import { useState } from "react";

// // Create a button that toggles between two texts: “Show Password” / “Hide Password”.
// export default function Toggle() {
//   const [isVisible, setIsVisible] = useState(false); // start with hidden

//   function handleToggle() {
//     setIsVisible((prev) => !prev); // flip true/false
//   }

//   return (
//     <>
//       <h1>Toggle</h1>
//       <button onClick={handleToggle}>
//         {isVisible ? "Hide Password" : "Show Password"}
//       </button>
//       <p>{isVisible ? "MySuperSecret123!" : ""}</p>
//     </>
//   );
// }

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false);
  function Handletoggle() {
    setIsVisible((prev) => !prev);
  }
  return (
    <>
      <h1>Toggle</h1>
      <button onClick={Handletoggle}>
        {isVisible ? "Hide Pass" : "show pass"}
      </button>
      <p>{isVisible ? "kachi per le" : ""}</p>
    </>
  );
}

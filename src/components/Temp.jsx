import { useState } from "react";

// 3. Create a simple toggle (ON/OFF) switch with text that changes accordingly.
export default function Temp() {
  const [isOn, SetisOn] = useState(false);
  //   const [text, Settext] = useState("ON");
  const HandleToggle = () => {
    SetisOn(!isOn);
  };
  return (
    <>
      <h1>Temp</h1>
      <button onClick={() => HandleToggle()}>Toggle</button>
      <p>{isOn ? "ON" : "OFF"}</p>
    </>
  );
}
// import { useState } from "react";

// // 1. Build a controlled input that shows its current value below as you type.
// export default function Temp() {
//   const [value, Setvalue] = useState("");
//   return (
//     <>
//       <h1>Temp</h1>
//       <input
//         type="text"
//         placeholder="type something"
//         value={value}
//         onChange={(e) => Setvalue(e.target.value)}
//       />
//       {value}
//     </>
//   );
// }

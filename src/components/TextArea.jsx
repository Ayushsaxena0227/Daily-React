import { useState } from "react";

export default function Textarea() {
  const maxlength = 200;
  const [text, Settext] = useState("");

  function handlechange(e) {
    Settext(e.target.value);
  }
  const effectiveLength = text.split(" ").join("").length;
  //   const text = "P r o g r a m";
  //   .split(" ") → ["P","r","o","g","r","a","m"]
  //   .join("") → "Program"
  //   .length → 7
  //   Notice: Original string had a .length of 13 (because of all the spaces). After the split‑&‑join removal, we get only 7, ignoring the spaces.
  function reset() {
    Settext("");
  }
  return (
    <div style={{ maxWidth: "400px" }}>
      <h1>Counter</h1>
      <textarea
        value={text}
        maxLength={maxlength} // optional enforce hard limit
        onChange={handlechange}
        rows="5"
        cols="40"
      />
      <div>Remaining: {maxlength - effectiveLength} characters</div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

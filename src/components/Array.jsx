import { useState } from "react";

// Add a text input with character counter below it (max 50 chars).
export default function Maxchar() {
  const [value, Setvalue] = useState("");
  const handlechange = (e) => {
    Setvalue(e.target.value);
  };
  const Splitted = value.split("").filter((ch) => ch !== " ").length;
  return (
    <>
      <h1>Maxchar</h1>
      <textarea onChange={handlechange} disabled={Splitted >= 50}></textarea>
      <p>value:{Splitted}</p>
    </>
  );
}

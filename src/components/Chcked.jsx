import { useState } from "react";

export default function Checked() {
  // Add a checkbox that enables a submit button only when checked
  const [change, setchange] = useState("");
  const [enable, Setenable] = useState(false);
  const handleClick = () => {
    Setenable((prev) => !prev);
  };
  return (
    <>
      <h1>CheckBox</h1>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={(e) => setchange(e.target.value)}
        onClick={handleClick}
      />

      <button disabled={!enable}>submit</button>
    </>
  );
}

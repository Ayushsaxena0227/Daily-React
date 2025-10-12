import React, { useState } from "react";
import "../styles/Password.css";
const Passwordstrength = () => {
  const [text, showtext] = useState("");
  const [strength, setstrength] = useState("");
  const [show, setshow] = useState(false);
  const checkStrength = (value) => {
    if (value.length == 0) {
      setstrength("");
    } else if (value.length < 6) {
      setstrength("weak");
    } else if (value.length < 10) {
      setstrength("medium");
    } else {
      setstrength("strong");
    }
  };
  const handleshow = () => {
    setshow(!show);
  };
  return (
    <div>
      Password Checker
      <input
        type={show ? "text" : "password"}
        placeholder="type here"
        onChange={(e) => {
          showtext(e.target.value);
          checkStrength(e.target.value);
        }}
      />
      <button onClick={handleshow}>{show ? "hide" : "show"}</button>
      <p>{strength}</p>
    </div>
  );
};

export default Passwordstrength;

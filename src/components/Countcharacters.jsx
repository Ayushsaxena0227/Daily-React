import React, { useState } from "react";

const Countcharacters = () => {
  const [text, settext] = useState("");
  const handleChange = (e) => {
    settext(e.target.value);
  };
  return (
    <div
      style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}
    >
      <h2>Character Counter</h2>
      <textarea
        value={text} // 🔸 (4)
        onChange={handleChange} // 🔸 (5)
        placeholder="Type something..."
        rows="5"
        cols="30"
      />
      <p>Characters: {text.length}</p> {/* 🔸 (6) */}
      {text.length > 100 && <p>Too long!</p>}
      <p>Words: {text.trim().split(/\+/).filter(Boolean).length}</p>
    </div>
  );
};

export default Countcharacters;

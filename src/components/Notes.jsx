import React, { useState } from "react";

const Notes = () => {
  const [input, setinput] = useState("");
  const [Notes, setnotes] = useState([]);
  const handleadd = () => {
    if (input.trim() === "") return;
    const newnotes = {
      id: Date.now(),
      input,
    };
    setnotes([newnotes, ...Notes]);
    setinput("");
  };
  const handledelete = (id) => {
    // confirmation
    let confirm = true;
    const confirmed = window.confirm("Are You sure you want to do this");
    if (confirmed) {
      const filtered = Notes.filter((item) => item.id !== id);
      setnotes(filtered);
    }
  };
  return (
    <>
      <h1>Write Your Notes Here</h1>
      <input
        type="text"
        placeholder="Enter Note"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={handleadd}>Add</button>
      {Notes.map((n) => (
        <div key={n.id}>
          <li>{n.input}</li>

          <button onClick={() => handledelete(n.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Notes;

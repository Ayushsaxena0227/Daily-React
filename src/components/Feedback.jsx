import { useState } from "react";

export default function Feedback() {
  const [feedback, Setfeedback] = useState("");
  const [store, Setstore] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      alert("please type first");
      return;
    } else {
      alert("thanks for feedback");
      Setstore([...store, feedback]);
      Setfeedback("");
    }
  };
  return (
    <>
      <h1>Feedback</h1>
      <input
        type="text"
        value={feedback}
        name=""
        id=""
        placeholder="type feedback"
        onChange={(e) => Setfeedback(e.target.value)}
      />
      <button onClick={handlesubmit}>submit</button>
      {store?.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

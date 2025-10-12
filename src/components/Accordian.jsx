import React, { useState } from "react";

const data = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building UIs.",
  },
  {
    id: 2,
    question: "What is useState?",
    answer: "useState is a React hook to manage state in components.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript used with React.",
  },
];

const Accordion = () => {
  const [openIds, setOpenIds] = useState([]);
  const [open, setopen] = useState(false);
  const toggle = (id) => {
    if (openIds.includes(id)) {
      const filtered = openIds.filter((item) => id !== item);
      setOpenIds(filtered);
      setopen(false);
    } else {
      setOpenIds([...openIds, id]);
      setopen(true);
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <button onClick={() => setOpenIds([])} style={{ marginBottom: "20px" }}>
        Close All
      </button>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            width: "300px",
            border: "2px solid black",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {item.question}
          <button onClick={() => toggle(item.id)}>{!open ? "+" : "-"}</button>
          {openIds.includes(item.id) && (
            <div style={{ padding: "10px", background: "blue" }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import { useState } from "react";

export default function ListHover() {
  const items = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Svelte" },
  ];
  const [hoveredId, SethoveredId] = useState(null);
  return (
    <>
      {/* Implement a list where hovering an item highlights it (with useState to store hovered id). */}
      <h1>List hover</h1>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </>
  );
}

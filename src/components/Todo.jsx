import { useState } from "react";

export default function Todo() {
  const [todo, Settodo] = useState([]);
  const [task, Settask] = useState("");
  const handleAdd = () => {
    if (task.trim() === "") {
      return;
    }
    const newtodo = { id: Date.now(), text: task.trim(), done: false };
    Settodo([...todo, newtodo]);
    Settask("");
  };
  const handledelete = (id) => {
    const filtered = todo.filter((todo) => todo.id !== id);
    Settodo(filtered);
  };
  return (
    <>
      <h1>TODO</h1>
      <input
        type="text"
        value={task}
        name=""
        id=""
        onChange={(e) => Settask(e.target.value)}
      />
      {/* <p>{task}</p> */}
      <button onClick={handleAdd}>ADD</button>

      {todo.map((item) => (
        <div>
          <li>{item.text}</li>
          <button onClick={() => handledelete(item.id)}>delete</button>
        </div>
      ))}
    </>
  );
}

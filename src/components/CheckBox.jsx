// 8. Build a checkbox list and show how many items are checked.

import { useEffect, useState } from "react";

export default function Checkbox() {
  // 9. Use useEffect to log a message only once when component mounts.
  useEffect(() => {
    console.log("Mounted");
  }, []);
  const [count, Setcount] = useState(0);
  const HandleChange = (e) => {
    if (e.target.checked) {
      Setcount(count + 1);
    } else {
      Setcount(count - 1);
    }
  };
  return (
    <>
      <h1>CHeckbox</h1>
      <input type="checkbox" onChange={HandleChange} />
      <input type="checkbox" onChange={HandleChange} />
      <input type="checkbox" onChange={HandleChange} />
      <p>{count}</p>
    </>
  );
}

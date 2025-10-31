import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  console.log(inputRef);

  return (
    <>
      <h2>Auto‑Focus Example</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="I'm focused automatically!"
      />
    </>
  );
}

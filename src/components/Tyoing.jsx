import React, { useEffect, useState } from "react";

const TypingTest = () => {
  const [text, settext] = useState("");
  const [running, setrunning] = useState(false);
  const [timeleft, settimeleft] = useState(10);
  const [wpm, setwpm] = useState(0);

  useEffect(() => {
    let timer = null;

    if (running && timeleft > 0) {
      timer = setInterval(() => {
        settimeleft((prev) => prev - 1);
      }, 1000);
    } else if (timeleft === 0) {
      calulcatewpm();
      setrunning(false);
      settext("");
    }

    return () => clearInterval(timer);
  }, [running, timeleft]);

  const calulcatewpm = () => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "").length;
    const timeinminutes = 1;
    setwpm(words / timeinminutes);
  };

  const handlestart = () => {
    setrunning(true);
    settext("");
    settimeleft(10);
    setwpm(0);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Typing test</h2>
      <p>Time left: {timeleft}</p>

      <textarea
        rows={10}
        disabled={!running}
        cols={35}
        placeholder="Start typing here.."
        value={text}
        onChange={(e) => settext(e.target.value)}
      ></textarea>

      <br />

      <button onClick={handlestart} disabled={running}>
        {running ? "Typing..." : "Start Test"}
      </button>

      {timeleft === 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Finished test</h3>
          <p>
            Words typed:{" "}
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word !== "").length
            }
          </p>
          <p>Your wpm:{wpm}</p>
        </div>
      )}
    </div>
  );
};

export default TypingTest;

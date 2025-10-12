import React, { useState } from "react";

const Modalpopup = () => {
  const [isopen, setisopen] = useState(false);
  const openModal = () => {
    setisopen(true);
  };
  const closeModal = () => {
    setisopen(false);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Modal Popup</h2>
        <button onClick={openModal}>open modal</button>
        <div
          onClick={closeModal}
          style={{
            width: "100vw",
            height: "100vh",
            background: "lightblue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isopen && (
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                minWidth: "300px",
                textAlign: "center",
              }}
            >
              <h3>This is a modal</h3>
              <p>add anything here</p>
              <button onClick={closeModal}>close modal</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modalpopup;

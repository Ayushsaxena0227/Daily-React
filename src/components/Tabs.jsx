import React, { useState } from "react";

const Tabs = () => {
  const [activetab, setactive] = useState("tab1");
  const rendertabs = () => {
    switch (activetab) {
      case "tab11":
        return <div>This is Tab1 content</div>;

      case "tab2":
        return <div>This is Tab2 content</div>;

      case "tab3":
        return <div>This is a Tab3 content</div>;

      default:
        return null;

      // setactive(activetab);
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => setactive("tab1")}>Tab1</button>
        <button onClick={() => setactive("tab2")}>Tab2</button>
        <button onClick={() => setactive("tab3")}>Tab3</button>
      </div>
      <div>{rendertabs()}</div>
    </div>
  );
};

export default Tabs;

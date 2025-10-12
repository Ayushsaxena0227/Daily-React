import { useState } from "react";
const LoadMore = () => {
  const [load, Setload] = useState(5);
  const Handlelick = () => {
    Setload((prev) => prev + 5);
  };
  const products = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Phone" },
    { id: 3, title: "Tablet" },
    { id: 4, title: "Headphones" },
    { id: 5, title: "Camera" },
    { id: 6, title: "Smartwatch" },
    { id: 7, title: "Keyboard" },
    { id: 8, title: "Mouse" },
    { id: 9, title: "Printer" },
    { id: 10, title: "Monitor" },
    { id: 11, title: "Speakers" },
    { id: 12, title: "Microphone" },
    { id: 13, title: "Projector" },
    { id: 14, title: "Charger" },
    { id: 15, title: "Backpack" },
    { id: 16, title: "Drone" },
    { id: 17, title: "Tripod" },
    { id: 18, title: "Lamp" },
    { id: 19, title: "SSD Drive" },
    { id: 20, title: "Router" },
  ];
  return (
    <>
      <h1>Products</h1>
      {products.slice(0, load).map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
      {load < products.length && <button onClick={Handlelick}>loadmore</button>}
      {load == products.length && <h2>Products Finished</h2>}
    </>
  );
};
export default LoadMore;

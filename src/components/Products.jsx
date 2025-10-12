import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, Setproduct] = useState([]);
  const { productId } = useParams();
  const [number, Setnumber] = useState(5);
  const [loading, Setloading] = useState(false);
  useEffect(() => {
    Setloading(true);
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await res.json();
      console.log(data);
      Setproduct(data.products);
      Setloading(false);
    };

    fetchProducts();
  }, [productId]);

  const handleclick = () => {
    Setnumber((prev) => prev + 5);
  };
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        {products?.slice(0, number).map((p) => (
          <div>
            <li>{p.id}</li>
            <li>{p.title}</li>
          </div>
        ))}
        <button onClick={handleclick}>loadmore</button>
      </div>
    </div>
  );
};

export default Products;

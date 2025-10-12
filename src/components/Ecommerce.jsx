import React, { useEffect, useState } from "react";

const Ecommerce = () => {
  const [loading, setLoading] = useState(false);
  const [products, setproduct] = useState([]);
  const [cart, setcart] = useState([]);
  const [showcart, setShowCart] = useState(false);
  const fetchproducts = async () => {
    setLoading(true);
    const limit = 10;
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const data = await res.json();
      setproduct(data.products);
      console.log("fetched data", data);
    } catch (error) {
      console.log("error while fetching", error);
    }
  };
  //   const discountedprice =
  //     (data.products.price / data.products.discountPercentage) * 100;
  useEffect(() => {
    fetchproducts();
  }, []);

  const addTocart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Already in cart!");
      return; // Stop here, don't add again
    } else {
      // Add it if not in cart
      setcart([...cart, product]);
    }
  };

  const Removecart = (product) => {
    const updatedcard = cart.filter((item) => item.id !== product?.id);
    setcart(updatedcard);
  };
  if (loading) {
    <p>Loading!...</p>;
  }
  return (
    <div>
      <h2>Product List</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h4 style={{ fontSize: "1rem" }}>{item.title}</h4>
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ${item.price}
          </span>
          <span style={{ fontWeight: "bold", color: "green" }}>
            ${item.price - (item.price * item.discountPercentage) / 100}
          </span>
          <img
            src={item.images[0]}
            height={150}
            width={150}
            style={{ objectFit: "cover", transition: "0.3s ease" }}
            onMouseOver={(e) => {
              if (item.images[1]) e.target.src = item.images[1];
            }}
            onMouseOut={(e) => {
              e.target.src = item.images[0];
            }}
          />
          <button onClick={() => addTocart(item)}>ADD TO CART</button>
        </div>
      ))}
      <div>
        <button
          style={{ fontSize: "1.5rem", position: "relative" }}
          onClick={() => setShowCart(!showcart)}
        >
          🛒
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "0.2rem 0.5rem",
                fontSize: "0.8rem",
              }}
            >
              {cart.length}
            </span>
          )}
        </button>
        {showcart && (
          <div style={{ background: "black" }}>
            {cart.map((item) => (
              <li style={{ color: "white" }}>{item.price}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ecommerce;

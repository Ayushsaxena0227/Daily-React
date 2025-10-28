import { useState } from "react";

export default function PaymentSelector() {
  const [payment, setPayment] = useState(""); // current selection

  return (
    <>
      <h2>Select Payment Method</h2>

      <label>
        <input
          type="radio"
          name="payment" // all radios share the same name
          value="creditCard"
          checked={payment === "creditCard"}
          onChange={(e) => setPayment(e.target.value)}
        />
        Credit Card
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="payment"
          value="paypal"
          checked={payment === "paypal"}
          onChange={(e) => setPayment(e.target.value)}
        />
        PayPal
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="payment"
          value="upi"
          checked={payment === "upi"}
          onChange={(e) => setPayment(e.target.value)}
        />
        UPI
      </label>

      <hr />
      <p>Selected method: {payment || "None"}</p>
    </>
  );
}

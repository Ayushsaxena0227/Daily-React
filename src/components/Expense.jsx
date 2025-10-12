import React, { useState } from "react";

const Expense = () => {
  const [amount, setamount] = useState("");
  const [text, settext] = useState("");
  const [transactions, settransactions] = useState([]);
  const [editid, setEditid] = useState(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      return;
    }
    const newtransaction = {
      id: editid || Date.now(),
      text,
      amount: parseFloat(amount),
    };
    if (editid) {
      settransactions((prev) =>
        prev.map((t) => (t.id === editid ? newtransaction : t))
      );
      setEditid(null);
    } else {
      // you can also set newtransaction at right side but at ui the new transaction will appear at last part
      settransactions([newtransaction, ...transactions]);
    }

    setamount("");
    settext("");
  };
  const handledelete = (id) => {
    const deleteditem = transactions.filter((item) => item.id !== id);
    settransactions(deleteditem);
  };
  const handleEdit = (transaction) => {
    settext(transaction.text);
    setamount(transaction.amount);
    setEditid(transaction.id);
  };
  const totalbalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Totalbalance: {totalbalance}</h3>
      <h2>Expense Tracker</h2>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="description"
          value={text}
          onChange={(e) => settext(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          style={{ marginBottom: "1rem" }}
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button style={{ width: "100%" }}>
          {editid ? "update transaction" : "Add transaction"}
        </button>
      </form>
      {transactions.map((t) => (
        <div key={t.id}>
          <span>
            {t.text} - ${t.amount}
          </span>
          <span>
            <button onClick={() => handleEdit(t)}>Edit</button>
            <button onClick={() => handledelete(t.id)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Expense;

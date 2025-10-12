import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1); // ✅ Current page
  const [total, setTotal] = useState(0); // ✅ Total quotes

  const limit = 30;

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const skip = (page - 1) * limit;
      const res = await fetch(
        `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      setQuotes(data.quotes);
      setTotal(data.total); // ✅ Save total items for disabling next button if needed
      console.log("Fetched:", data);
    } catch (error) {
      console.log("Failed to load quotes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const handleprev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  const handleforw = () => {
    if (page * limit < total) setPage((prev) => prev + 1);
  };
  return (
    <div>
      <h1>PAGINATION</h1>
      {loading && <p>Loading...</p>}
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>{quote.quote}</p>
          <small>{quote.author}</small>
        </div>
      ))}
      {/* pagination control */}
      <button disabled={page === 1} onClick={handleprev}>
        Prev
      </button>
      <span>Page: {page}</span>
      <button disabled={page * limit >= total} onClick={handleforw}>
        Forw
      </button>
    </div>
  );
};

export default Pagination;

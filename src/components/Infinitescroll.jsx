import React, { useEffect, useState } from "react";

const Infinitescroll = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      ); // ✅ BACKTICKS used here
      const data = await res.json();
      console.log("Fetched:", data);
      setPosts((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("Failed to load posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (scrollBottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Infinite Scroll</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            margin: "15px 0",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {loading && <p>Loading more posts...</p>}
    </div>
  );
};

export default Infinitescroll;

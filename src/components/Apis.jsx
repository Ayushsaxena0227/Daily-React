import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ DEFINE THE FUNCTION HERE, in the component's top-level scope
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://dummyjson.com/posts?limit=30");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setPosts(data.posts);
    } catch (error) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect can now see and call fetchPosts
  useEffect(() => {
    fetchPosts();
  }, []);

  // handleClick can ALSO see and call fetchPosts
  const handleClick = () => {
    fetchPosts();
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // A better loading state check
  if (loading && posts.length === 0) return <p>Loading initial posts...</p>;

  return (
    <div>
      <h2>Posts</h2>
      {/* Don't forget a key and a parent <ul> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}

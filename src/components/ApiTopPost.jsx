// Use fetch to call https://dummyjson.com/posts → sort all posts by number of likes and log the top 5 most liked ones.

import { useEffect, useState } from "react";

export default function ApiTopPost() {
  const [posts, Setposts] = useState([]);
  const [loading, Setloading] = useState(false);
  useEffect(() => {
    const Apitoppost = async () => {
      try {
        Setloading(true);
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const sorted = data.posts.sort((a, b) => b.likes - a.likes);
        const top5 = sorted.slice(0, 5);
        Setposts(top5);
        console.log(data.posts);
      } catch (error) {
        console.log("ERROR", error);
      } finally {
        Setloading(false);
      }
    };
    Apitoppost();
  }, []);
  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
  return (
    <>
      <h1>API TOP POST QS</h1>
      {posts.map((item) => (
        <div key={item.id}>
          <li>{item.title}</li>
          <strong>{item.reactions.likes}</strong>
        </div>
      ))}
    </>
  );
}

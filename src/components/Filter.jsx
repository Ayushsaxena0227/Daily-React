import { useState, useEffect } from "react";

export default function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);

  const filtered = query
    ? users.filter((u) =>
        `${u.firstName} ${u.lastName}`
          .toLowerCase()
          .includes(query.toLocaleLowerCase())
      )
    : [];

  // Fetch once when component mounts
  //   useEffect(() => {
  //     async function fetchUsers() {
  //       const res = await fetch("https://dummyjson.com/users");
  //       const data = await res.json();
  //       setUsers(data.users); // API gives { users: [...] }
  //     }
  //     fetchUsers();
  //   }, []);

  //   // Only filter when there's a non‑empty query
  //   const filtered = query
  //     ? users.filter((u) =>
  //         `${u.firstName} ${u.lastName}`
  //           .toLowerCase()
  //           .includes(query.toLowerCase())
  //       )
  //     : [];

  return (
    <>
      <h2>User Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name=""
        id=""
      />
      {query &&
        (filtered.length > 0 ? (
          filtered.map((u) => (
            <li key={u.id}>
              {u.firstName}
              {u.lastName}
            </li>
          ))
        ) : (
          <p>No users found</p>
        ))}
    </>
  );
}

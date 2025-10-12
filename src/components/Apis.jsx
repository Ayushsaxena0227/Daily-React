import { useEffect, useState } from "react";

// 8. Fetch users and filter only those whose email ends with “.biz”.
export default function Emails() {
  const [loading, setloading] = useState(false);
  const [mails, Setmails] = useState([]);
  useEffect(() => {
    const FetchEmails = async () => {
      try {
        setloading(true);
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        console.log(data);
        const Fetched = data.users.filter((item) =>
          item.email.startsWith("sophia")
        );
        console.log(Fetched);
        Setmails(Fetched);
        // console.log(Fetchedresp);
      } catch (error) {
        console.log("Error whilef fetching", error);
      } finally {
        setloading(false);
      }
    };
    FetchEmails();
  }, []);
  return (
    <>
      <h1>Emails</h1>
      {mails.map((item) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </>
  );
}

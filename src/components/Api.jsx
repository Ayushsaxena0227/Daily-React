import { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [user, Setuser] = useState([]);
  useEffect(() => {
    const createUser = async () => {
      try {
        const res = await axios.get(
          "https://reqres.in/api/users",
          //   {
          //     name: "Ayush",
          //     job: "software Developer",
          //   },
          {
            headers: {
              "x-api-key": "reqres-free-v1",
            },
          }
        );
        Setuser(res.data.data);
        console.log(res.data.data);
        // console.log("✅ Response:", res.data);
      } catch (err) {
        console.error("❌ Error:", err);
      }
    };

    createUser();
  }, []);

  return (
    <>
      <h1>Api response</h1>
      {user.map((item) => (
        <li>{item.first_name}</li>
      ))}
    </>
  );
}
// reqres - free - v1;

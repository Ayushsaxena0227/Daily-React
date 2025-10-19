import UserProfile from "./UserProfile";

export default function Greeting() {
  const Userdata = {
    name: "ayush",
    age: 30,
    city: "rudrapur",
  };
  return (
    <>
      <UserProfile user={Userdata} />
    </>
  );
}

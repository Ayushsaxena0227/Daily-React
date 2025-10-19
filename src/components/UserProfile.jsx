export default function UserProfile({ user }) {
  const { name, age, city } = user;
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>City:{city}</p>
    </div>
  );
}

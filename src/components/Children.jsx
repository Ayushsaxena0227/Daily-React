export default function Messagebubble({ sender, text, time }) {
  return (
    <div>
      <strong>{sender}</strong>
      <span>{text}</span>
      <p>{time}</p>
    </div>
  );
}

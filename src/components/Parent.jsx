import Messagebubble from "./children";

export default function ChatWindow() {
  const Usermessage = {
    sender: "alice",
    text: "fuck you",
    time: "anytime",
  };
  return (
    <>
      <h1>Chat Window</h1>
      <Messagebubble
        sender={Usermessage.sender}
        text={Usermessage.text}
        time={Usermessage.time}
      />
    </>
  );
}

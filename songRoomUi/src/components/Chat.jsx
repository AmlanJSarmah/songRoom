import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");
  const { user } = useAuth();

  const handleChange = (e) => {
    e.preventDefault();
    setChat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, chat]);
    setChat("");
  };

  return (
    <div className="chat">
      {/* <!-- Message form --> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          onChange={handleChange}
          value={chat}
        />
        <button type="submit">📩</button>
      </form>
      {/* <!-- Chat --> */}
      <section className="chat-window">
        {/* <!-- Individual message go here --> */}
        {messages.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h3>{user.username}</h3>
              <h2>{message}</h2>
            </div>
          );
        })}
        {/* <!-- Chat end here --> */}
      </section>
    </div>
  );
}

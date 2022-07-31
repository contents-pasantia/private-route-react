import {useState,useEffect} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3001');

export function Chat(){
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages]);
    };

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: user
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
    socket.emit("message", newMessage);
  };

  return (
    <div className="h-screen bg-slate-800 text-white flex flex-col items-center justify-center">
      <input
          name="user"
          type="text"
          placeholder="Escribe tu usuario ..."
          onChange={(e) => setUser(e.target.value)}
          className="border-2 border-zinc-500 p-2  text-black"
          value={user}
          autoFocus
        />
      <form onSubmit={handleSubmit} className="bg-slate-50 p-10">
        <h1 className="text-2xl font-bold my-2 text-black">MI CHAT</h1>
        <input
          name="message"
          type="text"
          placeholder="Escribe tu mensaje ..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${
                message.from === user ? "bg-sky-700 ml-auto" : "bg-black"
              }`}
            >
              <b>{message.from === user ? "yo": message.from}</b>:{message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
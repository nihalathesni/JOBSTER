import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(["User 1", "User 2", "User 3"]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const messageData = { sender: "You", text: input };
      socket.emit("message", messageData);
      setMessages((prev) => [...prev, messageData]);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <div className="w-1/3 lg:w-1/4 bg-white border-r border-gray-200">
        <div className="p-4 bg-[#45577E]">
          <h2 className="text-xl font-semibold text-white">Chats</h2>
        </div>
        <ul className="overflow-y-auto h-[calc(100vh-64px)]">
          {users.map((user, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer transition-colors duration-200 ${
                selectedUser === user
                  ? "bg-[#A0AECE] text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600">{user.charAt(0)}</span>
                </div>
                <span className="text-gray-800">{user}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1">
        {/* Chat Header */}
        <div className="p-4 bg-[#45577E] text-white">
          <h2 className="text-xl font-semibold">
            {selectedUser || "Select a chat"}
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#F5F5F5]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-[#45577E] text-white"
                    : "bg-white text-gray-800 shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45577E]"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-[#45577E] text-white rounded-lg hover:bg-[#3A4A6B] transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
import React, { useState } from "react";
import "./ChatContainer.css";

const ChatContainer = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I assist you today?" },
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        // Add human message
        setMessages([...messages, { sender: "human", text: input }]);

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: `You said: "${input}"` },
            ]);
        }, 1000);

        setInput("");
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`message-wrapper ${msg.sender === "human" ? "right" : "left"
                            }`}
                    >
                        {msg.sender === "bot" && (
                            <div className="icon bot-icon">🤖</div>
                        )}
                        <div className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                        {msg.sender === "human" && (
                            <div className="icon human-icon">😊</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    placeholder="Type your message..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatContainer;
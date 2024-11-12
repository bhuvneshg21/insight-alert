// components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input) {
      setMessages([...messages, { text: input, user: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <h3>Chatbot</h3>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className="message"><strong>{msg.user}: </strong>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;

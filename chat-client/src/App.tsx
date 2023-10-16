import './App.css';
import ChatRoom from './chatRoom/ChatRoom';
import ChatInput from './chatInput/ChatInput';

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const handleSendMessage = (text: string) => {
    const newMessage = {
      text,
      username,
      timestamp: new Date(),
    };
    setMessages([...messages]);
  };

  return (

    <div className="app">
      <h1>Chat Application</h1>
      <ChatRoom messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;

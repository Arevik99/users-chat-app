import './App.css';
import ChatRoom from './components/chatRoom/ChatRoom';
import { useState } from 'react';
import './App.css';
import ChatUsernameInput from './components/chatUsername/chatUsername';
import { ChatInput } from './components/chatInput/ChatInput';
import { Message } from './types/message.model';

function App() {
  const [messages, setMessages] = useState([{ content: '', username: '', userId: '', timestamp: new Date(), avatar: '' }]);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [avatar, setAvatar] = useState<string>('');

  const handleSendMessage = (message: Message) => {
    const newMessage = {
      content: message.content,
      username: message.username,
      userId: message.userId,
      timestamp: message.timestamp,
      avatar: message.avatar
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app-container">
      <div className="username-container">
        {!username && <ChatUsernameInput setUsername={setUsername} setUserId={setUserId} setAvatar={setAvatar} />}
      </div>
      {username && (
        <div className="chat-container">
          <ChatRoom username={username} userId={userId} messages={messages} />
          <ChatInput username={username} userId={userId} avatar={avatar} onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default App;

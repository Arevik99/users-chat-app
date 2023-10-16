import React, { useState } from 'react';
import { io } from 'socket.io-client';
import './chatInput.css';
interface ChatInputProps {
    onSendMessage: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const socket = io('http://localhost:8000');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('message', message);
            setMessage('');
            onSendMessage(message);
        }
    };

    return (
        <div className="chat-input-container">
            <input
                type="text"
                placeholder="Type your message..."
                className="chat-input-field"
                value={message}
                onChange={handleInputChange}
            />
            <button className="send-button" onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatInput;

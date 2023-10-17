import React, { useState } from 'react';
import { io } from 'socket.io-client';
import { ChatInputProps } from '../../types/props';
import './chatInput.css'
export const ChatInput: React.FC<ChatInputProps> = ({ username, userId, avatar, onSendMessage }) => {
    const [message, setMessage] = useState({ content: '', username: '', userId: '', timestamp: new Date(), avatar: '' });
    const socket = io('http://localhost:8000');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage({ content: e.target.value, username: username, userId: userId, timestamp: new Date(), avatar: avatar });
    };

    const handleSendMessage = () => {
        if (message.content.trim() !== '') {
            setMessage({ ...message, content: '' })
            socket.emit('message', message);
            onSendMessage(message);
        }
    };

    return (
        <div className="chat-input-container">
            <input
                type="text" placeholder="Type your message..."
                className="chat-input-field"
                value={message.content}
                onChange={handleInputChange} />
            <button className="send-button" onClick={handleSendMessage}>Send</button>
        </div>
    );
};

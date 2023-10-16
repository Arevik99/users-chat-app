import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface Message {
    text: string;
    username: string;
    timestamp: Date;
}

interface ChatRoomProps {
    messages: Message[];
}

const ChatRoom: React.FC<ChatRoomProps> = ({ messages }) => {
    const [displayedMessages, setDisplayedMessages] = useState(messages);
    const socket = io('http://localhost:8000');

    useEffect(() => {
        socket.on('message', (event) => {
            const newMessage: Message = {
                text: event,
                username: 'Server', // You can set a different username for server messages.
                timestamp: new Date(),
            };

            // Update the displayed messages with the new message
            setDisplayedMessages([...displayedMessages, newMessage]);
        });
    }, [displayedMessages]);

    return (
        <div className="chat-room">
            <div className="message-list">
                {displayedMessages.map((message, index) => (
                    message.text
                ))}
            </div>
        </div>
    );
};

export default ChatRoom;

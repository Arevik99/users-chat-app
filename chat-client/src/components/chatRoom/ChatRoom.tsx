import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ChatRoomProps } from '../../types/props';
import { Message } from '../../types/message.model';
import './chatRoom.css';
import { log } from 'console';

const ChatRoom: React.FC<ChatRoomProps> = ({ messages, username, userId }) => {
    const [displayedMessages, setDisplayedMessages] = useState(messages);
    const socket = io('http://localhost:8000');

    useEffect(() => {
        socket.on('message', (event: Message) => {
            const newMessage: Message = {
                content: event.content,
                username: event.username,
                userId: event.userId,
                timestamp: event.timestamp,
                avatar: event.avatar
            };
            setDisplayedMessages([...displayedMessages, newMessage]);
        });
    }, [displayedMessages]);

    return (
        <div className="message-container">
            {displayedMessages.map((message, index) => {
                if (!message.username) return null;
                return (
                    <div className='chat-room-container' key={index}>
                        <img className='user-avatar' src={message.avatar} />
                        <p>
                            <span className='chat-username'>
                                {message.username}
                            </span>
                            <span>
                                {message.content}
                            </span>
                        </p>
                    </div>
                )
            }
            )}

        </div>
    );
};

export default ChatRoom;

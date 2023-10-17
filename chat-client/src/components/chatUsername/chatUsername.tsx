import { useState } from 'react';
import AvatarSelection from '../avatarSelection/AvatarSelection';
import { ChatUsernameProps } from '../../types/props';

export default function ChatUsernameInput({ setUsername, setAvatar, setUserId }: ChatUsernameProps) {
    const [inputText, setInputText] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('');

    const handleSetAvatar = (selectedAvatar: string) => {
        setAvatar(selectedAvatar);
        setSelectedAvatar(selectedAvatar);
    }
    const handleSetUsername = () => {
        if (inputText.length >= 2) {
            setUsername(inputText);
            setUserId(Math.random().toString(36).substr(2, 9));
        }
    };

    return (
        <div>
            <label>
                Please enter your username:
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
            </label>
            <AvatarSelection onSelectAvatar={handleSetAvatar} />
            <button onClick={handleSetUsername} disabled={!inputText || !selectedAvatar}>Start chatting</button>
        </div>
    );
}
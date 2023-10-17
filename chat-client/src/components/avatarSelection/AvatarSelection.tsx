import { AvatarSelectionProps } from '../../types/props';
import Avatar1 from '../../images/avatar1.jpg';
import Avatar2 from '../../images/avatar2.jpg';

import './avatarSelection.css';

export default function AvatarSelection({ onSelectAvatar }: AvatarSelectionProps) {
    const handleAvatarSelection = (avatar: string) => {
        onSelectAvatar(avatar);
    };

    const avatarOptions = [Avatar1, Avatar2];

    return (
        <div>
            <h2>Select Profile Avatar:</h2>
            <div className="avatar-options">
                {avatarOptions.map((avatar) => (
                    <img
                        key={avatar}
                        src={avatar}
                        alt={avatar}
                        onClick={() => handleAvatarSelection(avatar)}
                    />
                ))}
            </div>
        </div>
    );
}
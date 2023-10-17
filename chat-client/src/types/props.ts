import { Message } from "./message.model";

export interface ChatInputProps {
    onSendMessage: (message: Message) => void;
    username: string;
    userId: string;
    avatar: string;
}

export interface AvatarSelectionProps {
    onSelectAvatar: (avatar: string) => void;
}

export interface ChatRoomProps {
    messages: Message[];
    username: string;
    userId: string;
}

export interface ChatUsernameProps {
    setUsername: (username: string) => void
    setAvatar: (avatar: string) => void
    setUserId: (userId: string) => void
}
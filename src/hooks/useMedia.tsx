import { create } from "zustand";

type State = {
    // media = userRecording + chatGptRecording
    media: string[];
    userRecording: string[];
    chatGptRecording: string[];
    suggestionRecording: string[];
};

type Action = {
    updateUserRecording: (blobUrl: string) => void;
    updateChatGptRecording: (blobUrl: string) => void;
};

export const useMedia = create<State & Action>((set) => ({
    media: [],
    userRecording: [],
    chatGptRecording: [],
    suggestionRecording: [],
    updateUserRecording: (blobUrl) =>
        set((state) => ({
            userRecording: [...state.userRecording, blobUrl],
            media: [...state.media, blobUrl],
        })),
    updateChatGptRecording: (blobUrl) =>
        set((state) => ({
            chatGptRecording: [...state.chatGptRecording, blobUrl],
            media: [...state.media, blobUrl],
        })),
}));

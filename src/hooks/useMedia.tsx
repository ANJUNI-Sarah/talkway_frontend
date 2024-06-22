import { create } from "zustand";

type State = {
    media: string[];
    userRecording: string[];
    chatGptRecording: string[];
};

type Action = {
    updateUserRecording: (blobUrl: string) => void;
    updateChatGptRecording: (blobUrl: string) => void;
};

export const useMedia = create<State & Action>((set) => ({
    /* State */
    media: [], // userRecording + chatGptRecording
    userRecording: [], // 使用者錄音
    chatGptRecording: [], // 對話錄音

    /* Action */
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

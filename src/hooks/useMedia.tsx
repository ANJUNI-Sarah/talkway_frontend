import { ReactNode } from "react";
import { create } from "zustand";
import { last } from "lodash";

import { blobToBase64 } from "@/utils/common/blobToBase64";

type Content = {
    base64: string;
    article: string | ReactNode;
};

type State = {
    media: Content[];
    userRecording: Content[];
    chatGptRecording: Content[];
};

type Action = {
    updateUserRecording: (blobUrl: string) => void;
    updateUserLastArticle: (article: string | ReactNode) => void;
    updateChatGptRecording: (content: Content) => void;
};

export const useMedia = create<State & Action>((set) => ({
    /* State */
    media: [], // userRecording + chatGptRecording
    userRecording: [], // 使用者錄音
    chatGptRecording: [], // 對話錄音

    /* Action */
    // 更新使用者錄音
    updateUserRecording: async (blobUrl) => {
        const base64 = await blobToBase64(blobUrl)
            .then((base64) => base64)
            .catch((error) => {
                throw Error(error);
            });
        const content = { base64, article: "" };
        return set((state) => ({
            userRecording: [...state.userRecording, content],
            media: [...state.media, content],
        }));
    },

    // 更新使用者最後一次的對話
    updateUserLastArticle: (article) =>
        set((state) => {
            const lastUserRecording = last(state.userRecording) || { base64: "", article: "" };
            lastUserRecording.article = article;
            return {
                userRecording: [...state.userRecording],
                media: [...state.media],
            };
        }),

    // 更新GPT對話
    updateChatGptRecording: (content) =>
        set((state) => ({
            chatGptRecording: [...state.chatGptRecording, content],
            media: [...state.media, content],
        })),
}));

import { create } from "zustand";

type State = {
    chatId: string;
};

type Action = {
    setChatId: (chatId: string) => void;
};

const chatIdState = create<State & Action>((set) => ({
    chatId: "",
    setChatId: (chatId) => set({ chatId }),
}));

export const useChatId = () => {
    const chatId = chatIdState((state) => state.chatId);
    const setChatId = chatIdState((state) => state.setChatId);

    return { chatId, setChatId };
};

import { create } from "zustand";

type State = {
    chatId: string;
};

type Action = {
    setChatId: (chatId: string) => void;
};

export const useChatId = create<State & Action>((set) => ({
    chatId: "",
    setChatId: (chatId) => set({ chatId }),
}));

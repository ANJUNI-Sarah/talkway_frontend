import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import API from "@/api";
import { useStartGptChatRequest, useContinuousGptChatRequest } from "./types";

/* 首次對話 */
export const useStartGptChat = () => {
    const result = useMutation({
        mutationFn: async (data: useStartGptChatRequest) => {
            const response = await axios.post(API.GPT_CHAT, data);
            return response.data;
        },
    });

    return result;
};

/* 接續對話 */
export const useContinuousGptChat = () => {
    const result = useMutation({
        mutationFn: async (data: useContinuousGptChatRequest) => {
            const response = await axios.post(API.GPT_CHAT, data);
            return response.data;
        },
    });

    return result;
};

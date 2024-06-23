import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import API from "@/api";
import { useLoadingDecorator } from "@/hooks/useLoadingDecorator";
import { useStartGptChatRequest, useContinuousGptChatRequest } from "./types";

/* 首次對話 */
export const useStartGptChat = () => {
    const { startLoading, endLoading } = useLoadingDecorator();
    const result = useMutation({
        mutationFn: async (data: useStartGptChatRequest) => {
            startLoading();
            const response = await axios.post(API.GPT_CHAT, data);
            endLoading();
            return response.data;
        },
    });

    return result;
};

/* 接續對話 */
export const useContinuousGptChat = () => {
    const { startLoading, endLoading } = useLoadingDecorator();
    const result = useMutation({
        mutationFn: async (data: useContinuousGptChatRequest) => {
            startLoading();
            const response = await axios.post(API.GPT_CHAT, data);
            endLoading();
            return response.data;
        },
    });

    return result;
};

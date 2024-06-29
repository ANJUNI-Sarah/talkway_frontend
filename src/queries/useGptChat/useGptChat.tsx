import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import API from "@/api";
import { useLoadingDecorator } from "@/hooks/useLoadingDecorator";

import { useStartGptChatRequest, useContinuousGptChatRequest } from "./types";

/* 首次對話 */
// TODO: Loading 之後要抽出處理
// TODO: interceptor 處理 data
export const useStartGptChat = () => {
    const { startLoading, endLoading } = useLoadingDecorator();
    const result = useMutation({
        mutationFn: async (data: useStartGptChatRequest) => {
            startLoading();
            return axios
                .post(API.GPT_CHAT, data)
                .then((res) => res.data)
                .finally(endLoading);
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
            return axios
                .post(API.GPT_CHAT, data)
                .then((res) => res.data)
                .finally(endLoading);
        },
    });

    return result;
};

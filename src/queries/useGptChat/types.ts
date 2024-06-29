export type GptChatRequest = {
    chat_id: string;
    scenario: string;
    user_input: string;
    user_input_base64: string;
};

export type useStartGptChatRequest = Pick<GptChatRequest, "scenario">;
export type useContinuousGptChatRequest = Omit<GptChatRequest, "scenario" | "user_input">;
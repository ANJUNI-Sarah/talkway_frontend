import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { TalkPageEnum } from "./enum";

const SettingPage = lazy(async () => import("@/pages/settingPage/settingPage"));
const ChatPage = lazy(async () => import("@/pages/talk/chatPage/chatPage"));
const SuggestionPage = lazy(async () => import("@/pages/talk/suggestionPage/suggestionPage"));

export const talkRoutes: RouteObject[] = [
    {
        path: TalkPageEnum.SETTINGS,
        element: <SettingPage />,
    },
    {
        path: TalkPageEnum.CHAT,
        element: <ChatPage />,
    },
    {
        path: TalkPageEnum.SUGGESTION,
        element: <SuggestionPage />,
    },
];

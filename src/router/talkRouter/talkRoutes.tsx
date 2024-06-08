import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const SettingPage = lazy(async () => import("@/pages/settings"));
const ChatPage = lazy(async () => import("@/pages/chat"));

export const talkRoutes: RouteObject[] = [
    {
        path: "/talk/settings",
        element: <SettingPage />,
    },
    {
        path: "/talk/chat",
        element: <ChatPage />,
    },
];

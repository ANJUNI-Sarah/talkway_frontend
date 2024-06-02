import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const SettingPage = lazy(async () => import("@/pages/settings"));

export const talkRoutes: RouteObject[] = [
    {
        path: "/talk/settings",
        element: <SettingPage />,
    },
];

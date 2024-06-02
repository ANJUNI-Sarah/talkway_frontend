import { lazy } from "react";
import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/components/layout/baseLayout";

import { talkRoutes } from "./talkRouter";

const HomePage = lazy(async () => import("@/pages"));

const RouterNoMatch = () => {
    return <div>RouterNoMatch</div>;
};

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/talk",
                element: <Outlet />,
                children: [...talkRoutes],
            },

            /* Add other features new routes here */
        ],
    },
    {
        path: "*",
        element: <RouterNoMatch />,
    },
];

const router = createBrowserRouter(routes);

export default router;

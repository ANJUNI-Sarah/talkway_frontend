import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/components/layout/baseLayout";

const RouterNoMatch = () => {
    return <div>RouterNoMatch</div>;
};

const HomePage = lazy(() => import("../pages/index"));

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            // {
            //     path: "/settings",
            //     element: <div>settings</div>,
            // },
            // {
            //     path: "/about",
            //     element: <div>about</div>,
            // },
        ],
    },
    {
        path: "*",
        element: <RouterNoMatch />,
    },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default router;

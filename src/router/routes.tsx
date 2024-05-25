import { RouteObject, createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/components/layout/baseLayout";
import { HomePage } from "@/pages/home";

const RouterNoMatch = () => {
    return <div>RouterNoMatch</div>;
};

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

const router = createBrowserRouter(routes, { basename: "/talkway" });

export default router;

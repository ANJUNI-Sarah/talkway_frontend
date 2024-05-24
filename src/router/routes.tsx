import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";

const RouterNoMatch = () => {
    return <div>404</div>;
};

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "/settings",
                element: <div>settings</div>,
            },
            {
                path: "/about",
                element: <div>about</div>,
            },
        ],
    },
    {
        path: "*",
        element: <RouterNoMatch />,
    },
];

const router = createBrowserRouter(routes, { basename: "/talkway" });

export default router;

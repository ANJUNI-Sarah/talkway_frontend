import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export const BaseLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

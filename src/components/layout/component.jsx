import { Outlet } from "react-router-dom";

import { Header } from '../header/component';
import { Footer } from '../footer/component';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                <Outlet />
            <Footer isDark />
        </div>
    )
};
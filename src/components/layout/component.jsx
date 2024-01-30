import { Header } from '../header/component';
import { Footer } from '../footer/component';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer isDark />
        </div>
    )
};
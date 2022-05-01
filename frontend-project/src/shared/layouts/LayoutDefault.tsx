import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { Footer } from "../components/Footer";
import { ResponsiveHeader } from "../components/ResponsiveHeader";

interface ILayoutBaseDePagina {
    children: React.ReactNode;
}

export const LayoutDefault: React.FC<ILayoutBaseDePagina> = ({ children }) => {
    return (
        <>
            <ResponsiveHeader />
                {children}
            <Footer />
        </>
    );
}
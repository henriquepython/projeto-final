import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { Footer } from "../components/Footer";
import { ResponsiveHeader } from "../components/ResponsiveHeader";

interface ILayoutBaseDePagina {
    children: React.ReactNode;
}

export const LayoutDefault: React.FC<ILayoutBaseDePagina> = ({ children }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();
    return (
        <>
            <ResponsiveHeader />
                {children}
            <Footer />
        </>
    );
}
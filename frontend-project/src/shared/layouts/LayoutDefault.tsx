import { Box, Container } from "@mui/material";
import { Footer } from "../components/Footer";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";

interface ILayoutBaseDePagina {
    children: React.ReactNode;
}

export const LayoutDefault: React.FC<ILayoutBaseDePagina> = ({ children }) => {
    return (
        <Container>
            <ResponsiveAppBar />
                {children}
            <Footer />
        </Container>
    );
}
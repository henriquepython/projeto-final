import { Container } from "@mui/material";
import { Footer } from "../components/Footer";
import { ResponsiveHeader } from "../components/ResponsiveHeader";

interface ILayoutBaseDePagina {
    children: React.ReactNode;
}

export const LayoutDefault: React.FC<ILayoutBaseDePagina> = ({ children }) => {
    return (
        <Container>
            <ResponsiveHeader />
                {children}
            <Footer />
        </Container>
    );
}
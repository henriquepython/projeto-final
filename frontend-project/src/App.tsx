import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LayoutDefault } from './shared/layouts';
import { AppThemeProvider } from './shared/contexts';
import { CssBaseline } from '@mui/material';

export function App() { 
    return (
        <>
            <CssBaseline/>
            <AppThemeProvider>
                <LayoutDefault>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </LayoutDefault>
            </AppThemeProvider>
        </>
    );
}

export default App;

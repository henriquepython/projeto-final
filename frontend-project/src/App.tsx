import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LayoutDefault } from './shared/layouts';

export function App() { 
    return (
        <LayoutDefault>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </LayoutDefault>
    );
}

export default App;

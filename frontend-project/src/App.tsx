import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LayoutDefault } from './shared/layouts';
import { AppContextProvider, AppThemeProvider } from './shared/contexts';
import { CssBaseline } from '@mui/material';

export function App() { 
	return (
		<>
			<CssBaseline/>
			<AppContextProvider>
				<AppThemeProvider>
					<LayoutDefault>
						<BrowserRouter>
							<AppRoutes />
						</BrowserRouter>
					</LayoutDefault>
				</AppThemeProvider>
			</AppContextProvider>
		</>
	);
}

export default App;

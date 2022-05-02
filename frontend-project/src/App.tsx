import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LayoutDefault } from './shared/layouts';
import { AppStoreProvider, AppThemeProvider } from './shared/contexts';
import { CssBaseline } from '@mui/material';

export function App() { 
	return (
		<>
			<CssBaseline/>
			<AppThemeProvider>
				<AppStoreProvider>
					<LayoutDefault>
						<BrowserRouter>
							<AppRoutes />
						</BrowserRouter>
					</LayoutDefault>
				</AppStoreProvider>
			</AppThemeProvider>
		</>
	);
}

export default App;

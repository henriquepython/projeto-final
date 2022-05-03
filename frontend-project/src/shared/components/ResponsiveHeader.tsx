import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { CssBaseline, Typography, TextField } from '@mui/material';
import { useAppThemeContext } from '../contexts/ThemeContext';
import { useAppStoreContext } from '../contexts';
import { useRef } from 'react';


const sections = [ 
	{title: 'Roupas', url:'/storeclothes'},
	{title: 'Esportes', url:'/storesports'},
	{title: 'Eletronicos', url:'/storeeletronics'}
];

const sections1 = [ 
	{title: 'Entrar', url:'/signin'},
	{title: 'Cadastre-se', url:'/signup'},
	{title: 'Area do Usuario', url:'/accounts'}
];

export const ResponsiveHeader = () => {
	const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
	const [anchorNavAccount, setAnchorNavAccount] = React.useState<null | HTMLElement>(null);
	
	
	const { search, setSearch } = useAppStoreContext();

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorNav(null);
	};

	const handleOpenNavMenuAccount = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorNavAccount(event.currentTarget);
	};

	const handleCloseNavMenuAccount = () => {
		setAnchorNavAccount(null);
	};


	const searchInput = () => {
		const input = document.getElementById('search');
		setSearch(input);
	};

	const { toggleTheme, themeName } = useAppThemeContext();
 
	return (
		<>
			<CssBaseline/>
			<Box 
				height='15%'
				display='flex'
				color='primary'
				sx={{ my: 2 ,background: 'none', borderBottom: .5, borderColor: themeName === 'light' ? 'black' : 'white'}}
			>
				<Container>
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: 'flex' }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								color='primary'
								onClick={handleOpenNavMenu}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorNav)}
								onClose={handleCloseNavMenu}
								color='primary'
								sx={{
									display: 'block',
								}}
							>
								<Typography 
									color='primary'
									sx={{ my: 1, fontSize: 20,borderBottom: 1, borderColor: 'primary', display: 'flex', justifyContent: 'center' }}  
								>
                  Categorias
								</Typography>

								{sections.map((section) => (
									<Button 
										key={section.title}
										href={section.url}
										onClick={handleCloseNavMenu}
										variant='outlined'
										color='primary'
										sx={{ display: { xs: 'flex'}, mx: 4, my: 2, '&:hover': {
											backgroundColor: 'blue',
											color: 'white'
										}  }}
									>
										{section.title}
									</Button>
								))}
							</Menu>

							<IconButton
								href='/home'
								color='primary'
								sx={{ ml: 2 }}
							>
                JHBC Store
							</IconButton>
						</Box>
            
						<TextField
							size='small'
							type='search'
							id="search"
							placeholder=' Pesquise Produtos'
							name="search"
							autoFocus
							sx={{position: 'relative', display: { xs: 'none', md: 'flex'}, width: '40%' ,border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
						/>

						<IconButton 
							color='primary'
							href='/search'
							onClick={() => searchInput()}
							sx={{ flexGrow: 0, mr: 19, display: { xs: 'none', md: 'flex' }}}
						>
							<SearchOutlinedIcon />
						</IconButton> 

						<Box sx={{ flexGrow: 0, mr: .5}}>
							<Tooltip title="Usuário">
								<>
									<IconButton 
										onClick={handleOpenNavMenuAccount}
										color='primary'
									>
										<AccountCircleOutlinedIcon />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorNavAccount}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
										open={Boolean(anchorNavAccount)}
										onClose={handleCloseNavMenuAccount}
										color='primary'
										sx={{
											display: 'block',
										}}
									>
										{sections1.map((section) => (
											<Button 
												key={section.title}
												href={section.url}
												onClick={handleCloseNavMenuAccount}
												variant='outlined'
												color='primary'
												sx={{ display: { xs: 'flex'}, mx: 4, my: 2, '&:hover': {
													backgroundColor: 'blue',
													color: 'white'
												}  }}
											>
												{section.title}
											</Button>
										))}
									</Menu>
								</>
							</Tooltip>
						</Box>   
            
						<Box sx={{ flexGrow: 0,mr: .5 }}>
							<Tooltip title="Carrinho">
								<IconButton 
									href='/cart'
									color='primary'
								>
									<ShoppingCartOutlinedIcon />
								</IconButton>
							</Tooltip>
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Area Admin">
								<IconButton 
									href='/signinadmin'
									color='primary'
								>
									<SettingsOutlinedIcon />
								</IconButton>
							</Tooltip>
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Mudar Tema">
								<IconButton 
									onClick={toggleTheme}
									color='primary'
								>
									{themeName === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon/>}
								</IconButton>
							</Tooltip>
						</Box>
					</Toolbar>
				</Container>
			</Box>
		</>
	);
};
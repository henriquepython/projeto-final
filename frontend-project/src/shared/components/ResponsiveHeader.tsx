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
import { CssBaseline, Divider, Typography, TextField } from '@mui/material';
import { useAppThemeContext } from '../contexts/ThemeContext';


const sections = [ 
  {title: 'Clothes', url:'/storeclothes'},
  {title: 'Sports', url:'/storesports'},
  {title: 'Eletronics', url:'/storeeletronics'}
]

export const ResponsiveHeader = () => {
  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
  const [search, setSearch] = React.useState('')
  //colocar no contextapi e usar na page search no findbyname product

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
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
                  Category
                </Typography>

                {sections.map((section) => (
                  <Button 
                  key={section.title}
                  href={section.url}
                  onClick={handleCloseNavMenu}
                  variant='outlined'
                  color='primary'
                  sx={{ display: { xs: 'flex'}, mx: 4, my: 2  }}
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
                My Store
              </IconButton>
            </Box>
            
            <TextField
              size='small'
              required
              type='search'
              id="searchProduct"
              placeholder=' Search Products'
              onChange={(e)=>setSearch(e.target.value)}
              name="search"
              autoComplete="search"
              autoFocus
              sx={{position: 'relative', display: { xs: 'none', md: 'flex'}, width: '40%' ,border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
            />

            <IconButton 
              color='primary'
              href='/search'
              sx={{ flexGrow: 0, mr: 19, display: { xs: 'none', md: 'flex' }}}
            >
              <SearchOutlinedIcon />
            </IconButton> 

            <Box sx={{ flexGrow: 0, mr: .5}}>
              <Tooltip title="Login">
                <IconButton 
                  href='/signin'
                  color='primary'
                >
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>   
            
            <Box sx={{ flexGrow: 0,mr: .5 }}>
              <Tooltip title="Open Cart">
                <IconButton 
                  href='/cart'
                  color='primary'
                  >
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Area Admin">
                <IconButton 
                  href='/signinadmin'
                  color='primary'
                >
                  <SettingsOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change Theme">
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
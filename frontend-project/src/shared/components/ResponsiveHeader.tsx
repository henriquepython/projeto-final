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
import { Divider, Input, Typography } from '@mui/material';


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

 
  return (
    <Box 
      position='static'
      height='100%'
      display='flex'
      sx={{ mb: 1 ,p: 1, background: 'none', color: 'black'}}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color='inherit'
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
              color='inherit'
              sx={{
                display: 'block',
              }}
            >
              <Typography 
                color='inherit'
                sx={{ ml: 2, my: 1 }}  
              >
                Category
              </Typography>

              <Divider color= 'black' />
              {sections.map((section) => (
                <Button 
                key={section.title}
                href={section.url}
                onClick={handleCloseNavMenu}
                variant='outlined'
                color='inherit'
                sx={{ display: { xs: 'flex'}, mx: 4, my: 2  }}
                >
                    {section.title}
                </Button>
              ))}
            </Menu>

            <IconButton
              href='/home'
              color='inherit'
              sx={{ ml: 2 }}
            >
              My Store
            </IconButton>
          </Box>
         

          <Input 
            id="searchProduct"
            type="search"
            placeholder='Search Products'
            onChange={(e)=>setSearch(e.target.value)}
            sx={{ position: 'relative', display: { xs: 'none', md: 'flex'}, width: '40%'}} 
          />

          <IconButton 
            color='inherit'
            href='/search'
            sx={{ flexGrow: 0, mr: 19, display: { xs: 'none', md: 'flex' }}}
          >
            <SearchOutlinedIcon />
          </IconButton> 

          <Box sx={{ flexGrow: 0, mr: .5}}>
            <Tooltip title="Login">
              <IconButton 
                href='/signin'
                color='inherit'
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>   
          
          <Box sx={{ flexGrow: 0,mr: .5 }}>
            <Tooltip title="Open Cart">
              <IconButton 
                href='/cart'
                color='inherit'
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Area Admin">
              <IconButton 
                href='/signinadmin'
                color='inherit'
              >
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};



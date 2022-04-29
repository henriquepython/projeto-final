import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export const ResponsiveAppBar = (props: HeaderProps) => {
  const { sections, title } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
    <AppBar 
    position="fixed" sx={{ p: 1, background: 'none', color: 'black'}}>
      <Container maxWidth="xl">
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
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
              {title}
            </IconButton>
          </Box>
         

          <Input 
            id="searchProduct"
            type="search"
            placeholder='Search Products'
            sx={{ position: 'relative', display: { xs: 'none', md: 'flex'}, width: '40%'}} 
          />

          <IconButton 
            color='inherit'
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
    </AppBar>
  );
};



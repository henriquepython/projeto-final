import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    position="fixed" sx={{ p: 1, background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,119,1) 35%, rgba(0,212,255,1) 100%)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sections.map((section) => (
                <Button 
                key={section.title}
                href={section.url}
                onClick={handleCloseNavMenu}
                sx={{ display: { xs: 'flex'} }}
                >
                    {section.title}
                </Button>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section) => (
              <Button
                key={section.title}
                onClick={handleCloseNavMenu}
                variant='outlined'
                href={section.url}
                sx={{ my: 2, m: 1, color: 'white', display: 'block', borderColor: 'white' }}
              >
                {section.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 1 }}>
            <Button 
              sx={{color: 'white', borderColor: 'white'}}
              variant='outlined'
            >
              Sign In
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, mr: 1 }}>
            <Button 
              sx={{color: 'white', borderColor: 'white'}}
              variant='outlined'
             >
               Sign Up
             </Button>
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton href='/cart' sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{color: 'white', p:2}} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Area Admin">
              <IconButton href='/signinadmin' sx={{ p: 0 }}>
                <SettingsIcon sx={{color: 'white', p:2}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};



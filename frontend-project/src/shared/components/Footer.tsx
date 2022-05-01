import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { CssBaseline, Divider } from '@mui/material';
import { useAppThemeContext } from '../contexts';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="primary">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/henriquepython/projeto-final">
        My Store
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Footer = () => {
  
  const { themeName } = useAppThemeContext();
  return (
    <>
      <CssBaseline/>
      <Box
          component="footer"
          display='flex'
          sx={{ my: 3 , p: 4,background: 'none', borderTop: .5, borderColor: themeName === 'light' ? 'black' : 'white', color: 'primary'}}
          >
          <Container sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant="h5" color='primary'>
                  My Store
              </Typography>
              <Typography>
                  Inicio
              </Typography>
              <Typography>
                Contato
              </Typography>
              <Typography>
                Quem Somos
              </Typography>
          </Container>
          <Container sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
              <Typography variant="h5" color='primary'>
                  Contato:
              </Typography>
              <Typography>
                <WhatsappOutlinedIcon/> (xx) xxxxx-xxxx
              </Typography>
              <Typography>
                <LocalPhoneOutlinedIcon/> (xx) xxxxx-xxxx
              </Typography>
              <Typography>
                <EmailOutlinedIcon/> Mystore@mail.com
              </Typography>
              <Typography>
                <LocationOnOutlinedIcon/> Rua xxxxxx, nºxxx, xxxx, Feira de Santana-BA
              </Typography>
          </Container>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vw'}}>
        <Copyright />
      </Box>
    </>
  );
}
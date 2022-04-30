import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { CssBaseline, Divider } from '@mui/material';

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
  return (
    <>
      <CssBaseline/>
      <Box
          component="footer"
          display='flex'
          sx={{ my: 3 , p: 4, background: 'none', borderTop: .5, borderColor: '#5c6bc0', color: 'primary'}}
          >
          <Container maxWidth='sm'>
              <Typography variant="body1" color='primary'>
                  My sticky footer can be found here.
              </Typography>
              <Copyright />
          </Container>
      </Box>
    </>
  );
}
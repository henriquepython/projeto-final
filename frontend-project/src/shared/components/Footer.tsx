import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
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
    <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
        }}
        >
        <Divider color='black' sx={{ my: 3}} />
        <Container maxWidth='sm'>
            <Typography variant="body1">
                My sticky footer can be found here.
            </Typography>
            <Copyright />
        </Container>
    </Box>
  );
}
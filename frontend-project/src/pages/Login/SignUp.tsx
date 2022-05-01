import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useAppThemeContext } from '../../shared/contexts';


export const SignUp = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const { themeName } = useAppThemeContext();

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color='primary' component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  placeholder="Name"
                  autoFocus
                  sx={{border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  placeholder="phone number"
                  name="phone"
                  sx={{border: .1, borderRadius: 1, borderColor: themeName === 'light' ? 'black' : 'white', color: themeName === 'light' ? 'black' : 'white', background: themeName === 'light' ? 'primary' : 'white'}}
                />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='primary'
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link color='primary' href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
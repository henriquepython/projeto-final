import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAppThemeContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';


export const SignUp = () => {
	const { themeName } = useAppThemeContext();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const name = input.get('name');
		const email = input.get('email');
		const password = input.get('password');
		const phone = input.get('phone');
		const signUp = {
			name: name,
			email: email,
			password: password,
			phoneNumber: phone
		};

		await api.post('/user', signUp)
			.then((response) => {
				console.log(response.data);
				alert('Usuário cadastrado com sucesso');
				document.location.href = '/home';
			})
			.catch ((err) => {
				console.log(err);
				alert('Não foi possivel cadastrar usuário, confira seus dados');
			});	
	};

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
          Cadastro
				</Typography>
				<Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required={true}
								autoComplete="given-name"
								name="name"
								type='text'								
								fullWidth
								id="name"
								label="Nome"
								autoFocus
								sx={{
									border: .1,
									borderRadius: 1,
									borderColor: themeName === 'light' ? 'black' : 'white',
									color: themeName === 'light' ? 'black' : 'white',
									background: themeName === 'light' ? 'primary' : 'white'
								}}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required={true}
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								type='email'
								autoComplete="email"
								sx={{
									border: .1,
									borderRadius: 1,
									borderColor: themeName === 'light' ? 'black' : 'white',
									color: themeName === 'light' ? 'black' : 'white',
									background: themeName === 'light' ? 'primary' : 'white'
								}}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required={true}
								fullWidth
								name="password"
								label="Senha"
								type="password"
								id="password"
								autoComplete="new-password"
								sx={{
									border: .1,
									borderRadius: 1,
									borderColor: themeName === 'light' ? 'black' : 'white',
									color: themeName === 'light' ? 'black' : 'white',
									background: themeName === 'light' ? 'primary' : 'white'
								}}
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								required={true}
								fullWidth
								type='tel'
								id="phone"
								label="Telefone"
								name="phone"
								sx={{
									border: .1,
									borderRadius: 1,
									borderColor: themeName === 'light' ? 'black' : 'white',
									color: themeName === 'light' ? 'black' : 'white',
									background: themeName === 'light' ? 'primary' : 'white'
								}}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color='primary'
						sx={{ mt: 3, mb: 2,'&:hover': {
							backgroundColor: 'blue',
							color: 'white'
						} }}
					>
            Cadastrar
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link color='primary' href="/signin" variant="body2">
                Já tem uma conta? Entre
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};
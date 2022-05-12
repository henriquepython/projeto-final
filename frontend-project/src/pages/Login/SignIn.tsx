import * as React from 'react';
import { api } from '../../shared/services/api';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Button, Link} from '@mui/material';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {  useAppThemeContext } from '../../shared/contexts';

export const SignIn = () => {
	const { themeName } = useAppThemeContext();
	
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const input = new FormData(event.currentTarget);
		const email = `${input.get('email')}`;
		const password = `${input.get('password')}`;
		const login = {
			email: email,
			password: password
		};
			
		await api.post('/auth', login)
			.then(async()=> {
				await api.get(`user/${email}`)
					.then((response)=> {
						sessionStorage.setItem('id_user', `${response.data._id}`);						
						console.log('Usuário logado com sucesso!');
						document.location.href = '/home';	
					});
			})
			.catch((err)=>{
				console.log(err);
				alert('Não foi possivel entrar, email ou senha invalido!');
			});
	};
	
	return (
		<Grid container component="main" sx={{ height: '100vh'}}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(https://source.unsplash.com/ejhjSZKTeeg)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: (t) =>
						t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography color='primary' component="h1" variant="h5">
						Entrar
					</Typography>
					<Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							placeholder="Email"
							name="email"
							autoComplete="email"
							autoFocus
							sx={{ 
								border: .1,
								borderRadius: 1,
								borderColor: themeName === 'light' ? 'black' : 'white', 
								color: themeName === 'light' ? 'black' : 'white', 
								background: themeName === 'light' ? 'primary' : 'white'
							}}
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							placeholder="Senha"
							type="password"
							id="password"
							autoComplete="current-password"
							autoFocus
							sx={{
								border: .1,
								borderRadius: 1,
								borderColor: themeName === 'light' ? 'black' : 'white',
								color: themeName === 'light' ? 'black' : 'white',
								background: themeName === 'light' ? 'primary' : 'white'
							}}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ 
								mt: 3,
								mb: 2,
								'&:hover': {
									backgroundColor: 'black',
									color: 'white'
								} 
							}}
						>
                            Entrar
						</Button>
        
						<Grid container>
							<Grid item>
								<Link href="/signup" variant="body2">
									Não tem uma conta? Cadastre-se!
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
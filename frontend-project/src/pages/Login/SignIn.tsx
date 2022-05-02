import { Button, Grid } from '@mui/material';
import Link from '@mui/material/Link';
import { Login } from '../../shared/components';
import { useAppStoreContext } from '../../shared/contexts';

export const SignIn = () => {

	const {setUser} = useAppStoreContext();

	const getUser = () => {
		setUser('userid');
	};

	return (
		<Login 
			title='Entrar'
			urlImage='https://source.unsplash.com/ejhjSZKTeeg'
		>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2,'&:hover': {
					backgroundColor: 'blue',
					color: 'white'
				} 
				}}
				onClick={getUser}
				href='/home'
			>
         Entrar
			</Button>
        
			<Grid container>
				<Grid item>
					<Link href="/signup" variant="body2">
						{'Não tem uma conta? Cadastre-se'}
					</Link>
				</Grid>
			</Grid>
		</Login>
	);
};
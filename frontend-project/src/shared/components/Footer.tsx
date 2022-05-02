import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { CssBaseline } from '@mui/material';
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
        Feito por João Henrique B. Cerqueira
			</Link>{', '}
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
				sx={{ mt:2 ,background: 'none', borderTop: .5, borderColor: themeName === 'light' ? 'black' : 'white', color: 'primary'}}
			>
				<Container sx={{mt: 2,display: 'flex', flexDirection: 'column', ml:15, gap: 1}}>
					<Typography variant="h5" color='primary'>
                  JHBC Store
					</Typography>
					<Link color='primary' sx={{cursor: 'pointer', width: '10%'}}>
                  Inicio
					</Link >
					<Link color='primary' sx={{cursor: 'pointer', width: '10%'}}>
                  Contato
					</Link >
					<Link color='primary' sx={{cursor: 'pointer', width: '30%'}}>
                  Quem Somos
					</Link >
					<Box sx={{mt: 2}}>
						<Copyright />
					</Box>
				</Container>
				<Container sx={{mt: 2,display: 'flex', flexDirection: 'column', gap: 1}}>
					<Typography variant="h5" color='primary'>
                  Contato:
					</Typography>
					<Typography color='primary'>
						<WhatsappOutlinedIcon fontSize='small' /> (xx) xxxxx-xxxx
					</Typography>
					<Typography color='primary'>
						<LocalPhoneOutlinedIcon fontSize='small' /> (xx) xxxxx-xxxx
					</Typography>
					<Typography color='primary'>
						<EmailOutlinedIcon fontSize='small'/> JHBCstore@mail.com
					</Typography>
					<Typography color='primary'>
						<LocationOnOutlinedIcon fontSize='small'/> Rua xxxxxx, nºxxx, xxxx, Feira de Santana-BA
					</Typography>
				</Container>
			</Box>
		</>
	);
};
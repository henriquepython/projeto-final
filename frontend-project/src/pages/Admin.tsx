import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { TableOrdersAdmin, TableProductAdmin, TableUsersAdmin } from '../shared/components';
import { useEffect, useState } from 'react';
import { api } from '../shared/services/api';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		'& .MuiDrawer-paper': {
			position: 'relative',
			whiteSpace: 'nowrap',
			width: 240,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: 'border-box',
			...(!open && {
				overflowX: 'hidden',
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up('sm')]: {
					width: theme.spacing(9),
				},
			}),
		},
	}),
);

interface IOrderAll {
	totalPrice: number;
	products: [];
	status: string;
	userId: string;
	_id: string;
}

interface IProductAll {
	title: string;
	image: string;
	description: string;
	category: string;
	price: number;
	quantity: number;
	_id: string;
}

interface IUserAll {
	name: string;
	email: string;
	roles: string;
	phoneNumber: string;
	password: string;
	_id:string;
}

export const Admin = () => {
	const [open, setOpen] = React.useState(true);
	const [orderAll, setOrderAll] = useState<IOrderAll[]>([]);
	const [productAll, setProductAll] = useState<IProductAll[]>([]);
	const [userAll, setUserAll] = useState<IUserAll[]>([]);
	const [activeStep, setActiveStep] = React.useState(0);
	
	useEffect(()=> {
		const orders = api.get('order/');
		const products = api.get('product/');
		const users = api.get('user/');
			
		Promise.all([orders, products, users])
			.then((response) => {
				setOrderAll(response[0].data);
				setProductAll(response[1].data);
				setUserAll(response[2].data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const handleLogoutAdmin = () => {
		sessionStorage.removeItem('token');
		document.location.href = '/home';
	};

	const getStepContent = (step: number) => {
		switch (step) {
		case 0:
			return <TableOrdersAdmin orders={orderAll} />;
		case 1:
			return  <TableProductAdmin products={productAll} />;
		case 2:
			return  <TableUsersAdmin user={userAll} />;
		default:
			throw new Error('Unknown step');
		}
	};

	return (
		<Box sx={{ display: 'flex'}}>
			<Drawer variant="permanent" open={open}>
				<Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 1 }}>
                    Dashboard Admin
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</Toolbar>
				<Divider />
				<Box 
					sx={{ 
						mx: 4,
						mt: 4,
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						justifyContent: 'center'
					}}
				>
					<Button
						variant="contained"
						onClick={()=>setActiveStep(0)}
						sx={{'&:hover': { backgroundColor: 'white', color: 'black'} }}
					>
						Pedidos
					</Button>
					<Button
						variant="contained"
						onClick={()=>setActiveStep(1)}
						sx={{'&:hover': { backgroundColor: 'white', color: 'black'} }}
					>
						Produtos
					</Button>
					<Button
						variant="contained"
						onClick={()=>setActiveStep(2)}
						sx={{ '&:hover': { backgroundColor: 'white', color: 'black'} }}
					>
						Usuários
					</Button>
					<Button
						variant="contained"
						onClick={handleLogoutAdmin}
						sx={{ '&:hover': { backgroundColor: 'white', color: 'black'} }}
					>
						Logout
					</Button> 
				</Box>
			</Drawer>
			<Box sx={{ width: '100%', height: '100vh', overflow: 'auto' }}>
				<Paper sx={{m: 2}}>
					{getStepContent(activeStep)}
				</Paper>
			</Box>
		</Box>
	);
};
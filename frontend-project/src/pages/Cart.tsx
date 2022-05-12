import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { CartList } from '../shared/components/CartList';
import { useAppContext } from '../shared/contexts';
import { api } from '../shared/services/api';

export const Cart = () => {
	const { cart, setCart } = useAppContext();
	const idUser = sessionStorage.getItem('id_user');
	
	let totalCart = 0;
	cart.map((item)=> {
		totalCart += (item.price * item.quantity);
	});
	sessionStorage.setItem('total_order', `${totalCart}`);
	
	const total = sessionStorage.getItem('total_order');
	if (totalCart == 0) {
		sessionStorage.removeItem('item_cart');
	}

	useEffect(()=> {
		console.log(idUser);
		if (idUser) {
			api.get(`cart/user/${idUser}`)
				.then((response)=> {
					setCart(response.data);
					console.log(JSON.stringify(response.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}

	}, []);
	
	return (
		<>
			<Box sx={{ width: '100vw'}}>
				<CartList />
			</Box>
			<Box sx={{fontSize: 30 ,display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 4, flexWrap: 'wrap'}}>	
				Total: R$ {total}
			</Box>
			<Box sx={{ mr: 2, display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'end', flexDirection: 'row' }}>
				<Button
					variant="contained"
					sx={{ mt: 3, ml: 1 }}
					href='/home'
				>
                    Voltar
				</Button>
				<Button
					variant="contained"
					sx={{ mt: 3, ml: 1 }}
					href='/checkout'
				>
                    Finalizar compra
				</Button>
			</Box>
		</>
	);
};
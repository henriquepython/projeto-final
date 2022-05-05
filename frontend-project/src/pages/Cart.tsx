import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import { CartList } from '../shared/components/CartList';
import { api } from '../shared/services/api';
// import { useAppStoreContext } from '../shared/contexts';
// import { api } from '../shared/services/api';

//fazer chamada api cart findCartByUser
export const Cart = () => {
	const [cart, setCart] = useState([]);
	const idUser = localStorage.getItem('id_user');

	useEffect(()=> {
		console.log(idUser);
		api.get(`cart/user/${idUser}`)
			.then((response)=> {
				setCart(response.data);
				console.log(JSON.stringify(response.data));
			});
	}, [idUser]);
	return (
		<>
			<Box sx={{ width: '100vw'}}>
				<CartList productsByUser={cart} />
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
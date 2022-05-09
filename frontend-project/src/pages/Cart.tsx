import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CartList } from '../shared/components/CartList';
import { api } from '../shared/services/api';

interface ICart {
	userId: string;
	productId: string;
	quantity: number;
	price: number;
	title: string;
	image: string;
}

export const Cart = () => {
	const [cart, setCart] = useState<ICart[]>([]);
	const idUser = sessionStorage.getItem('id_user');
	
	//calcula total do carrinho
	let totalCart = 0;
	cart.map((item)=> {
		totalCart += (item.price * item.quantity);
	});
	sessionStorage.setItem('total_order', `${totalCart}`);
	
	//muda status do icone do carrinho, caso tenha itens ele tera uma cor alerta, caso não tera cor normal. 
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
				<CartList productsByUser={cart} />
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
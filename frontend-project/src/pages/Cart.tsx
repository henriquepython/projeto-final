import { Box, Button } from '@mui/material';
import { CartList } from '../shared/components/CartList';

const products = [
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
    
];
//fazer chamada api cart findCartByUser

export const Cart = () => {
    
	return (
		<>
			<Box sx={{ width: '100vw'}}>
				<CartList productsByUser={products} />
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
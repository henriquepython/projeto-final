import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ProductList } from '../../shared/components/ProductList';
import { useAppStoreContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';

const products = [
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs'},
];
//fazer chamada api cart findByCategory clothes
export const StoreClothes = () => {
	const {clothes, setClothes} = useAppStoreContext();

	useEffect(() => {
		api
			.get('/category/Clothes')
			.then(({data}) => {
				setClothes(data);
			});
	}, []);
	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={clothes}  />
		</Box>
	);
};
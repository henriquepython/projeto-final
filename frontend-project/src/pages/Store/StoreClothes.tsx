import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components/ProductList';
import { api } from '../../shared/services/api';

const products = [
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Clothes', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];

export const StoreClothes = () => {
	const [clothes, setClothes] = useState([...products]);

	useEffect(()=> {
		api.get('product/category/Clothes')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setClothes(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={clothes}  />
		</Box>
	);
};
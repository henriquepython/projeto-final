import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components';
import { api } from '../../shared/services/api';


const products = [
	{ title: 'sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'sports', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];
//fazer chamada api cart findByCategory eletronics

export const StoreSports = () => {
	const [sport, setSport] = useState([...products]);

	useEffect(()=> {
		api.get('product/category/Sports')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setSport(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={sport} />
		</Box>
	);
};
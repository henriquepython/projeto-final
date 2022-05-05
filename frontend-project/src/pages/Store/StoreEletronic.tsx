import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components';
import { api } from '../../shared/services/api';


const products = [
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, _id: 'djfs'},
];
//fazer chamada api cart findByCategory eletronics

export const StoreEletronic = () => {
	const [eletronic, setEletronic] = useState([...products]);

	useEffect(()=> {
		api.get('product/category/Eletronicos')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setEletronic(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={eletronic}  />
		</Box>
	);
};
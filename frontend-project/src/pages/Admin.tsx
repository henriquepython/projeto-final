//find by all order

import { useEffect, useState } from 'react';
import { TableOrdersAdmin, TableProductAdmin } from '../shared/components';
import { api } from '../shared/services/api';

const order = [
	{totalPrice: 1, status: 'OK', userId:'fiaif' },
	{totalPrice: 1, status: 'OK', userId:'fiaif' },
	{totalPrice: 1, status: 'OK', userId:'fiaif' },
];

const products = [
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
	{ title: 'Technology', image: 'https://source.unsplash.com/ojZ4wJNUM5w', price: 1, productId: 'djfs', quantity: 1 },
        
];
    

export const Admin = () => {
	const [orderAll, setOrderAll] = useState([...order]);

	useEffect(()=> {
		api.get('order/')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setOrderAll(response.data);
			});
	}, []);

	const [productAll, setProductAll] = useState([...products]);

	useEffect(()=> {
		api.get('product/')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setProductAll(response.data);
			});
	}, []);
	return (
		<>
			<TableOrdersAdmin orders={orderAll} />
			<TableProductAdmin products={productAll} />
		</>
	);
};
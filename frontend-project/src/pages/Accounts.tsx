import { useEffect, useState } from 'react';
import { TableOrders } from '../shared/components';
import { api } from '../shared/services/api';

interface IOrderByUser {
	totalPrice: number;
	products: [];
	status: string;
	userId: string;
	_id: string;
}

export const Accounts = () => {
	const [orderUser, setOrderUser] = useState<IOrderByUser[]>([]);
	const idUser = sessionStorage.getItem('id_user');
	
	useEffect(()=> {
		api.get(`order/user/${idUser}`)
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setOrderUser(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	return (
		<>
			<TableOrders orders={orderUser} />
		</>
	);
};
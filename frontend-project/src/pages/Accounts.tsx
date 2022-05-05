import { useEffect, useState } from 'react';
import { TableOrders } from '../shared/components';
import { api } from '../shared/services/api';

//find by id order userid=user
//const {user} = useAppStoreContext()

export const Accounts = () => {
	const [orderUser, setOrderUser] = useState([]);
	const idUser = localStorage.getItem('id_user');
	useEffect(()=> {
		api.get(`order/user/${idUser}`)
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setOrderUser(response.data);
			});
	}, []);
	return (
		<>
			<TableOrders orders={orderUser} />
		</>
	);
};
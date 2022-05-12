import { useEffect } from 'react';
import { TableOrdersAccount } from '../shared/components';
import { useAppContext } from '../shared/contexts';
import { api } from '../shared/services/api';

export const Accounts = () => {
	const { setOrderUser } = useAppContext();
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
			<TableOrdersAccount />
		</>
	);
};
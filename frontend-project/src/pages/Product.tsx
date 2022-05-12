import { useEffect } from 'react';
import { ProductView } from '../shared/components';
import { useAppContext } from '../shared/contexts';
import { api } from '../shared/services/api';

export const Product = () => {
	const { setProductById } = useAppContext();

	const code = sessionStorage.getItem('id_product');	
	useEffect(()=> {
		api.get(`product/${code}`)
			.then((response)=>{
				setProductById(response.data);
			});
	});

	return(
		<ProductView />
	);
};
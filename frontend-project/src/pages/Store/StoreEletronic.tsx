import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components';
import { api } from '../../shared/services/api';

export const StoreEletronic = () => {
	const [eletronics, setEletronics] = useState([]);

	useEffect(()=> {
		api.get('product/category/Eletronicos')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setEletronics(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={eletronics}  />
		</Box>
	);
};
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components';
import { api } from '../../shared/services/api';

export const StoreSports = () => {
	const [sports, setSports] = useState([]);

	useEffect(()=> {
		api.get('product/category/Esportes')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setSports(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={sports} />
		</Box>
	);
};
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ProductList } from '../../shared/components';
import { useAppContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';

export const StoreSports = () => {
	const { sports, setSports } = useAppContext();

	useEffect(()=> {
		api.get('product/category/Esportes')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setSports(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100%'}}>
			<ProductList products={sports} />
		</Box>
	);
};
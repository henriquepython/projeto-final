import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ProductList } from '../../shared/components';
import { useAppContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';

export const StoreEletronic = () => {
	const { eletronics, setEletronics } = useAppContext();

	useEffect(()=> {
		api.get('product/category/Eletronicos')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setEletronics(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100%'}}>
			<ProductList products={eletronics}  />
		</Box>
	);
};
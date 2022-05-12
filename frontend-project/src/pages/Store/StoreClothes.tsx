import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ProductList } from '../../shared/components/ProductList';
import { useAppContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';


export const StoreClothes = () => {
	const { clothes, setClothes } = useAppContext();

	useEffect(()=> {
		api.get('product/category/Roupas')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setClothes(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100%'}}>
			<ProductList products={clothes}  />
		</Box>
	);
};
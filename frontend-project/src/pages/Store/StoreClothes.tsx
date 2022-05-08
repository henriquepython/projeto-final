import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductList } from '../../shared/components/ProductList';
import { api } from '../../shared/services/api';


export const StoreClothes = () => {
	const [clothes, setClothes] = useState([]);

	useEffect(()=> {
		api.get('product/category/Roupas')
			.then((response) => {
				console.log(JSON.stringify(response.data));
				setClothes(response.data);
			});
	}, []);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={clothes}  />
		</Box>
	);
};
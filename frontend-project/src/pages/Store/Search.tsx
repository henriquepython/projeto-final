import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductItem, ProductList } from '../../shared/components';
import { useAppStoreContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';


//fazer chamada api cart findByname products com o state search
//const { search } = useAppStoreContext();
export const Search = () => {
	const [searchProduct, setSearchProduct] = useState([]);
	
	const {search} = useAppStoreContext();

	useEffect(()=> {
		api.get(`product/name/${search}`)
			.then((response) => {
				console.log(response.data);
				setSearchProduct(response.data);
			});
	}, [search]);

	return (
		<Box sx={{ width: '100vw'}}>
			<ProductList products={searchProduct}  />
			<>{search}</>
		</Box>
	);
};
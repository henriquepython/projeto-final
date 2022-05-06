import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductItem, ProductList } from '../../shared/components';
import { api } from '../../shared/services/api';


//fazer chamada api cart findByname products com o state search
export const Search = () => {
	const [ search, setSearch] = useState({
		_id:'',
		title:'',
		image:'',
		description:'',
		category:'',
		quantity:0,
		price:0,
	});
	useEffect(()=>{
		const searchs = sessionStorage.getItem('search');
		console.log(searchs);
		api.get(`product/name/${searchs}`)
			.then((response)=> {
				setSearch(response.data);
				
			});

	}, []);
	//const { search } = useAppStoreContext();
	
	return (
		<Box sx={{ width: '100vw', display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
			{search.title != '' ? <Box sx={{width: 220, m: 2}}>
				<ProductItem title={search.title} image={search.image} price={search.price} _id={search._id} />
			</Box> : <></>}
		</Box>
	);
};
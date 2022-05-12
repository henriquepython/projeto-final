import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ProductItem } from '../../shared/components';
import { useAppContext } from '../../shared/contexts';
import { api } from '../../shared/services/api';

export const Search = () => {
	const { search, setSearch } = useAppContext();
	useEffect(()=>{
		const searchs = sessionStorage.getItem('search');
		console.log(searchs);
		api.get(`product/name/${searchs}`)
			.then((response)=> {
				setSearch(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	return (
		<Box 
			sx={{ 
				width: '100vw',
				display: 'flex',
				flexShrink: 1,
				flexWrap: 'wrap',
				justifyContent: 'center',
				flexDirection: 'row'
			}}
		>
			{search.title != '' ? (
				<Box>
					<ProductItem
						title={search.title}
						image={search.image}
						price={search.price}
						_id={search._id}
					/>
				</Box>
			):(
				<></>
			)}
		</Box>
	);
};
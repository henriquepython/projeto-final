import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductItem } from '../../shared/components';
import { api } from '../../shared/services/api';

interface ISearch {
	_id: string;
	title: string;
	image: string;
	description: string;
	category: true;
	quantity: number;
	price: number;
}

export const Search = () => {
	const [ search, setSearch] = useState<ISearch>({} as ISearch);
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
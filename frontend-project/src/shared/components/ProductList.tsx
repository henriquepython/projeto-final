import { Box } from '@mui/material';

import { ProductItem } from './';

interface IProductListProps {
	products: Array<{
		title: string;
		image: string;
		price: number;
		_id: string;
	}>;
}

export const ProductList = (props: IProductListProps) => {
	const { products } = props;

	return (
		<Box 
			sx={{ 
				width: '100%',
				m:2,
				display: 'flex',
				flexShrink: 1,
				flexWrap: 'wrap',
				justifyContent: 'center',
				flexDirection: 'row'
			}}
		>
			{products?.map((item, index) => (
				<Box key={index}>
					<ProductItem
						title={item.title}
						image={item.image}
						price={item.price}
						_id={item._id}
					/>
				</Box>
			))}
		</Box>
	);
};
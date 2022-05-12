import { Box } from '@mui/material';
import { useAppContext } from '../contexts';
import { ProductItemCart } from './ProductItemCart';

export const CartList = () => {
	const { cart } = useAppContext();
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
			{cart?.map((item, index) => (
				<Box key={index} sx={{width: 220, m: 2}}>
					<ProductItemCart 
						title={item.title}
						image={item.image}
						quantity={item.quantity}
						price={item.price}
						_id={item.productId}
					/>
				</Box>
			))}
		</Box>
	);
};
import { Box } from '@mui/material';
import { ProductItemCart } from './ProductItemCart';

  interface ICartListProps {
    productsByUser: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      quantity: number;
      productId: string;
    }>;
  }

export const CartList = (props: ICartListProps) => {
	const { productsByUser } = props;
	return (
		<>
			<Box sx={{ width: '100vw', display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
				{productsByUser?.map((item, index) => (
					<Box key={index} sx={{width: 220, m: 2}}>
						<ProductItemCart title={item.title} image={item.image} quantity={item.quantity} price={item.price} _id={item.productId}/>
					</Box>
				))}
			</Box>
		</>
	);
};
import { Box, Typography } from '@mui/material';
import { ProductItem } from './ProductItem';
import { ButtonRemoveCart } from './ButtonRemoveCart';

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
				{productsByUser.map((item, index) => (
					<Box key={index} sx={{width: 220, m: 2}}>
						<ProductItem title={item.title} image={item.image} price={item.price} productId={item.productId}>
                                    
							<Typography variant='subtitle2' component="div" sx={{mb: 2}}> 
                  Quantity: {item.quantity}
							</Typography>
							<ButtonRemoveCart />
						</ProductItem>
					</Box>
				))}
			</Box>
		</>
	);
};
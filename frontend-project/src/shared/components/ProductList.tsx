import { Box } from '@mui/material';
import { ButtonAddCart } from './';
import { ProductItem } from './';

  interface IProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      productId: string;
    }>;
  }

export const ProductList = (props: IProductListProps) => {
	const { products } = props;

	return (
		<>
			<Box sx={{ width: '100vw', display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
				{products.map((item, index) => (
					<Box key={index} sx={{width: 220, m: 2}}>
						<ProductItem title={item.title} image={item.image} price={item.price} productId={item.productId}>
							<ButtonAddCart />
						</ProductItem>
					</Box>
				))}
			</Box>
		</>
	);
};
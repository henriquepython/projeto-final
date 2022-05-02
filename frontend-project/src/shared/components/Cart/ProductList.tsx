import { Box, Button, Grid, Pagination } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { ButtonAddCart } from '../ButtonAddCart';

import { ProductItem } from './ProductItem';

  interface ProductListProps {
    products: ReadonlyArray<{
      title: string;
      image: string;
      price: number;
      productId: string;
    }>;
  }

export const ProductList = (props: ProductListProps) => {
    const { products } = props

    return (
      <>
        <Box sx={{ width: '100vw', display: 'flex', flexShrink: 1, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
        {products.map((item) => (
            <Box sx={{width: 220, m: 2}}>
                <ProductItem title={item.title} image={item.image} price={item.price} productId={item.productId}>
                 
                    <ButtonAddCart />
                  
                </ProductItem>
            </Box>
        ))}
        </Box>
    </>
  );
}